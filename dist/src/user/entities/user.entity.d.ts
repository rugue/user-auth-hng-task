import { Organisation } from 'src/organisation/entities/organisation.entity';
export declare class User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    organisations: Organisation[];
    phone?: string;
}
