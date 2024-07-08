import { User } from 'src/user/entities/user.entity';
export declare class Organisation {
    orgId: string;
    name: string;
    users: User[];
    description?: string;
}
