import { describe, expect, test } from "@jest/globals";

import { removeSecondFromTime } from "../utils/time";

describe("Remove second from hh:mm:ss format time", () => {
  test("convert 12:34:33 to 12:34", () => {
    // Arrange
    const timeInput = "12:34:33";

    const expectedOutput = "12:34";

    // Act
    const actualOutput = removeSecondFromTime(timeInput);

    // Assert
    expect(actualOutput).toEqual(expectedOutput);
  });
});
