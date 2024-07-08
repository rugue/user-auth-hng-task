"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConfig = void 0;
const faker_1 = require("@faker-js/faker");
const testConfig = () => {
    const mockUser = {
        userId: faker_1.faker.string.uuid(),
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        email: faker_1.faker.internet.email().toLowerCase(),
        password: faker_1.faker.internet.password(),
        organisations: [],
        ...(faker_1.faker.datatype.boolean() && {
            phone: faker_1.faker.phone.number(),
        }),
    };
    return {
        mockUser,
        mockOrganisation: {
            orgId: faker_1.faker.string.uuid(),
            name: faker_1.faker.company.name(),
            users: [{ ...mockUser }],
        },
    };
};
exports.testConfig = testConfig;
//# sourceMappingURL=test-config.constant.js.map