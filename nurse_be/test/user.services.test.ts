import * as userModal from "../src/model/user.model";

import {
  createUserService,
  findAllUserService,
} from "../src/service/user.service";

jest.mock("../src/model/user.model");

describe("Nurse Service functions test", () => {
  //Arrange
  const createUserInput = {
    name: "test",
    password: "Hello123",
    passwordConfirmation: "Hello123",
    email: "test@gmail.com",
  };

  const createUserOutput = [
    {
      id: 140,
      name: "test",
      email: "test@gmail.com",
      created_at: "2023-01-02T15:35:31.328Z",
      updated_at: "2023-01-02T15:35:31.328Z",
    },
  ];

  const findAllUserOutput = [
    {
      id: 140,
      name: "test",
      email: "test@gmail.com",
      created_at: "2023-01-02T15:35:31.328Z",
      updated_at: "2023-01-02T15:35:31.328Z",
    },
  ];

  (userModal.createUser as jest.Mock).mockResolvedValue(createUserOutput);
  (userModal.findBy as jest.Mock).mockResolvedValue(findAllUserOutput);

  it("createUser services returns user object", async () => {
    const newUser = await createUserService(createUserInput);

    expect(createUserOutput[0]).toEqual(newUser);
  });

  it("findAllNurse services returns user object in list", async () => {
    const allUsers = await findAllUserService();

    expect(findAllUserOutput).toEqual(allUsers);
  });
});
