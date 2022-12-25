import { compareString } from "../src/utils/jwt.utils";
test("Verify password hash ", async () => {
  // Arrange
  const passwordInput = "Hello123";
  const hashPasswordInput =
    "$2b$10$QbvXAyKI6CN8tbhBuJOu8ehqyUtxhVWmuJYtsq1kMF75OI823i0xa";
  const hashPasswordInput2 = `$2b$10$miRM2xC5cePQB2Fku2cRwe/zV.7qdZv/t52sYUUtJBt9/ypmPyB2m`;

  const expectedOutput = true;

  // Act
  const actualOutput = await compareString(passwordInput, hashPasswordInput);
  const actualOutput2 = await compareString(passwordInput, hashPasswordInput2);

  // Assert
  expect(actualOutput).toEqual(expectedOutput);
  expect(actualOutput2).toEqual(expectedOutput);
});
