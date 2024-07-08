export declare enum Environment {
    Development = "development",
    Production = "production",
    Test = "test",
    Staging = "staging"
}
export declare class EnvironmentVariables {
    NODE_ENV: Environment;
    DATABASE_URL: string;
    JWT_SECRET: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
