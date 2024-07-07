import { faker } from '@faker-js/faker';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { appConfig } from 'src/_common/constants/app-config.constant';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;

  const mockUser: User = {
    userId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    organisations: [],
  };

  const mockSecret = 'mockTestSecret';

  const mockUserService = {};

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: mockSecret,
          signOptions: { expiresIn: appConfig().expiresIn },
        }),
      ],
      controllers: [AuthController],
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
      ],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    jwtService = moduleRef.get<JwtService>(JwtService);
  });

  it('Token should expire after one hour', async () => {
    const { accessToken } = await authService.generateToken(mockUser, '');

    const decoded = jwtService.decode(accessToken);

    expect(typeof accessToken).toBe('string');

    // Get current time in Unix timestamp format (seconds since epoch)
    const now = Math.floor(Date.now() / 1000);

    // Since token generation and test execution have a time difference,
    // allow a small leeway (e.g., a few seconds) in the comparison
    const leeway = 30; // 30 seconds leeway

    // Check if the exp is within the expected range, considering the leeway
    expect(decoded.exp).toBeGreaterThanOrEqual(now + 3600 - leeway);
    expect(decoded.exp).toBeLessThanOrEqual(now + 3600 + leeway);
  });

  it('Token should have correct userId as sub', async () => {
    const { accessToken } = await authService.generateToken(mockUser, '');

    const decoded = jwtService.decode(accessToken);

    expect(typeof accessToken).toBe('string');

    expect(decoded.sub).toBe(mockUser.userId);
  });
});
