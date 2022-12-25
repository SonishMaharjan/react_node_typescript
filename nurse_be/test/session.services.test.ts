import * as sessionModal from "../src/model/session.model";

import {
  createSessionService,
  createAccessToken,
} from "../src/service/session.service";

jest.mock("../src/model/session.model");

describe("Nurse Service functions test", () => {
  //Arrange
  const createSessionOutput = [
    {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQyLCJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdF9hQGdtYWlsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAxLTAyVDE2OjE0OjM5LjE5NVoiLCJ1cGRhdGVkX2F0IjoiMjAyMy0wMS0wMlQxNjoxNDozOS4xOTVaIiwic2Vzc2lvbiI6NzIsImlhdCI6MTY3MjY3NjEwNiwiZXhwIjoxNzA0MjMzNzA2fQ.HG_J5bn08WVYSNVqNV_Feau6XBwri_hX09QVlWJ95bk",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjkuMiIsImlzVmFsaWQiOnRydWUsInVzZXJfaWQiOjE0MiwiY3JlYXRlZF9hdCI6IjIwMjMtMDEtMDJUMTY6MTU6MDYuMTUxWiIsInVwZGF0ZWRfYXQiOiIyMDIzLTAxLTAyVDE2OjE1OjA2LjE1MVoiLCJpYXQiOjE2NzI2NzYxMDYsImV4cCI6MTcwNDIzMzcwNn0.aT_sDCdNtpmgFDMDgO5Ltxv1zhxfNDoNx_AVfJpVufU",
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

  (sessionModal.createSession as jest.Mock).mockResolvedValue(
    createSessionOutput
  );
  (sessionModal.findBy as jest.Mock).mockResolvedValue(findAllUserOutput);
  (sessionModal.updateSession as jest.Mock).mockResolvedValue(
    findAllUserOutput
  );

  it("createSessionService services returns accessToken and refreshToken", async () => {
    const newSession = await createSessionService("1", "");

    expect(createSessionOutput[0]).toEqual(newSession);
  });
});
