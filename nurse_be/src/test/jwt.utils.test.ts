import { sign, getPasswordHash } from "../utils/jwt.utils";

// test("Verify sign token", () => {
//   // Arrange
//   const userInput = {
//     id: 131,
//     name: "hi",
//     email: "hi@world.com",
//     created_at: "2022-12-11T16:53:33.818Z",
//     updated_at: "2022-12-11T16:53:33.818Z",
//     session: 45,
//   };

//   const optionsInput = { expiresIn: "1y" };
//   const expectedOutput = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMxLCJuYW1lIjoiaGkiLCJlbWFpbCI6ImhpQHdvcmxkLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTExVDE2OjUzOjMzLjgxOFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMi0xMVQxNjo1MzozMy44MThaIiwic2Vzc2lvbiI6NDYsImlhdCI6MTY3MTM2MTI0OSwiZXhwIjoxNzAyOTE4ODQ5fQ.VkbQ8424vPLoo4Px81dleSID2mwGMo3Pknio-qpj8ng`;

//   // Act
//   const actualOutput = sign(userInput, optionsInput);

//   // Assert
//   expect(actualOutput).toEqual(expectedOutput);
// });

// test("Verify password hash ", () => {
//   // Arrange
//   const passwordInput = "helloworld";

//   const expectedOutput =
//     "$2b$10$heX/OUE4xpYAOMglR2ublu8o2l0Hai0MPMQ2tGpS47j3W6N.vYQ2S";

//   // Act
//   const actualOutput = getPasswordHash(passwordInput);

//   // Assert
//   expect(actualOutput).toEqual(expectedOutput);
// });
