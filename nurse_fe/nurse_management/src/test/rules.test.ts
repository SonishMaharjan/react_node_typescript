import { describe, expect, test } from "@jest/globals";

import { createNurseValidation } from "../rules/nurseValidation";

import { signUpValidation, loginValidation } from "../rules/userValidation";

describe("Validate create nurse form and validate corresponding error message", () => {
  test("Empty name and email and get corresponding error message", () => {
    // Arrange
    const input = { name: "", email: "", endTime: "", startTime: "" };

    const expectedOutput = {
      name: "Name is required",
      email: "Email address is required",
    };

    // Act
    const actualOutput = createNurseValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide name and email get no error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messi@wc.com",
      endTime: "",
      startTime: "",
    };

    const expectedOutput = {};

    // Act
    const actualOutput = createNurseValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide invalid email get error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messiwc.com",
      endTime: "",
      startTime: "",
    };

    const expectedOutput = { email: "Email address is invalid" };

    // Act
    const actualOutput = createNurseValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide invalid time for startTime and endTime and get error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messi@wc.com",
      endTime: "dsa",
      startTime: "sdafas:34",
    };

    const expectedOutput = {
      endTime: "Invalid end time format. Format should be HH:MM",
      startTime: "Invalid start time format. Format should be HH:MM",
    };

    // Act
    const actualOutput = createNurseValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe("Validate create user form and validate corresponding error message", () => {
  test("Empty name, email and password and get corresponding error message", () => {
    // Arrange
    const input = { name: "", email: "", password: "" };

    const expectedOutput = {
      name: "Name is required",
      email: "Email address is required",
      password: "Password is required",
    };

    // Act
    const actualOutput = signUpValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide name, email & password get no error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messi@wc.com",
      password: "wc22324234",
    };

    const expectedOutput = {};

    // Act
    const actualOutput = signUpValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide short password get error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messi@wc.com",
      password: "w4234",
    };

    const expectedOutput = {
      password: "Password must be 8 or more characters",
    };

    // Act
    const actualOutput = signUpValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide invalid email get error message", () => {
    // Arrange
    const input = {
      name: "messi",
      email: "messiwc.com",
      password: "dsfas3242342",
    };

    const expectedOutput = { email: "Email address is invalid" };

    // Act
    const actualOutput = signUpValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe("Validate login user form and validate corresponding error message", () => {
  test("Empty email and password and get corresponding error message", () => {
    // Arrange
    const input = { email: "", password: "" };

    const expectedOutput = {
      email: "Email address is required",
      password: "Password is required",
    };

    // Act
    const actualOutput = loginValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide email & password get no error message", () => {
    // Arrange
    const input = {
      email: "messi@wc.com",
      password: "wc22324234",
    };

    const expectedOutput = {};

    // Act
    const actualOutput = loginValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });

  test("Provide invalid email get error message", () => {
    // Arrange
    const input = {
      email: "messiwc.com",
      password: "dsfas3242342",
    };

    const expectedOutput = { email: "Email address is invalid" };

    // Act
    const actualOutput = loginValidation(input);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });
});
