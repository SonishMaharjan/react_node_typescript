import * as nurseModel from "../src/model/nurse.model";

import {
  addNurse,
  findAllNurse,
  findNurseById,
  updateNurseById,
} from "../src/service/nurse.service";

jest.mock("../src/model/nurse.model");

describe("Nurse Service functions test", () => {
  //Arrange
  const createNurseInput = {
    name: "kaite",
    email: "kat@gmail.com",
    isRoundingManager: true,
    weekdays: "['SUNDAY']",
    startTime: "7:59",
    endTime: "11:59",
  };

  const createNurseOutput = [
    {
      id: 48,
      name: "kaite",
      email: "ddsdsddfdsasdcdf@gmail.com",
      contact: null,
      weekdays: ["SUNDAY"],
      startTime: "07:59:00",
      endTime: "11:59:00",
      image: null,
      isRoundingManager: true,
      created_at: "2023-01-02T07:18:56.704Z",
      updated_at: "2023-01-02T07:18:56.704Z",
      userId: 131,
    },
  ];

  const findAllNurseOutput = [
    {
      id: 48,
      name: "kaite",
      email: "ddsdsddfdsasdcdf@gmail.com",
      contact: null,
      weekdays: ["SUNDAY"],
      startTime: "07:59:00",
      endTime: "11:59:00",
      image: null,
      isRoundingManager: true,
      created_at: "2023-01-02T07:18:56.704Z",
      updated_at: "2023-01-02T07:18:56.704Z",
      userId: 131,
    },
    {
      id: 45,
      name: "Teset nurse",
      email: "m@my.com",
      contact: null,
      weekdays: ["SUNDAY", "WEDNESDAY"],
      startTime: "12:32:00",
      endTime: "06:20:00",
      image:
        "https://nurse-management.s3.ap-northeast-1.amazonaws.com/nurse_images/1671987522825-Screenshot%20from%202022-12-23%2017-59-22.png",
      isRoundingManager: true,
      created_at: "2022-12-25T16:07:13.398Z",
      updated_at: "2022-12-26T02:27:58.363Z",
      userId: 131,
    },
  ];

  const updateNurseInput = {
    weekdays: "['SUNDAY', 'MONDAY']",
  };

  const updateNurseOutput = [
    {
      id: 48,
      name: "kaite",
      email: "ddsdsddfdsasdcdf@gmail.com",
      contact: null,
      weekdays: ["SUNDAY", "MONDAY"],
      startTime: "07:59:00",
      endTime: null,
      image: null,
      isRoundingManager: true,
      created_at: "2023-01-02T07:18:56.704Z",
      updated_at: "2023-01-02T08:12:04.668Z",
      userId: 131,
    },
  ];

  (nurseModel.createNurse as jest.Mock).mockResolvedValue(createNurseOutput);
  (nurseModel.findNurseBy as jest.Mock).mockResolvedValue(findAllNurseOutput);
  (nurseModel.updateNurse as jest.Mock).mockResolvedValue(updateNurseOutput);

  it("addNurse services returns nurse object", async () => {
    const newNurse = await addNurse(createNurseInput);

    expect(createNurseOutput).toEqual(newNurse);
  });

  it("findAllNurse services returns nurse object in list", async () => {
    const allNurses = await findAllNurse({});

    expect(findAllNurseOutput).toEqual(allNurses);
  });

  it("findNurseById services returns nurse object in list", async () => {
    const allNurses = await findNurseById("1");

    expect(findAllNurseOutput).toEqual(allNurses);
  });

  it("updateNurseById services returns nurse object in list", async () => {
    const updatedNurse = await updateNurseById("48", updateNurseInput);

    expect(updateNurseOutput).toEqual(updatedNurse);
  });
});
