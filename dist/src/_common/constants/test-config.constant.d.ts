import { User } from 'src/user/entities/user.entity';
export declare const testConfig: () => {
    mockUser: User;
    mockOrganisation: {
        orgId: string;
        name: string;
        users: {
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            organisations: import("../../organisation/entities/organisation.entity").Organisation[];
            phone?: string;
        }[];
    };
};
