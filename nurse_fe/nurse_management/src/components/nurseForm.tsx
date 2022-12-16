import useForm from "../hooks/useForm";

import { createNurseValidation } from "../rules/nurseValidation";

import {
  createNurseServices,
  updateNurseServices,
} from "../services/nurseServices";

import { capitalize } from "lodash";

import { publish } from "../event";
import { ALERT_TYPE_CLASS } from "../constanst";

import { WEEKDAYS } from "../constanst";

import { useState, useEffect } from "react";

import { INurse } from "../types";

export interface INurseFormProps {
  onFormSubmitted: () => void;
  isUpdateForm?: Boolean;
  nurse?: INurse;
}

const NurseForm: React.FC<INurseFormProps> = ({
  onFormSubmitted,
  isUpdateForm,
  nurse,
}) => {
  const {
    values,
    errors,
    resetForm,
    handleChange,
    handleSubmit,
    setInitialValue,
  } = useForm(submitNurseForm, createNurseValidation);

  const [weekdays, setWeekdays] = useState<string[]>([]);
  const [isRoundingManager, setIsRoundingManager] = useState<boolean>(false);

  useEffect(() => {
    // setInitialValueForUpdateForm();
    resetForm();
    setInitialFormValue(nurse);
  }, [nurse]);

  function setInitialFormValue(nurse: any) {
    setInitialValue(nurse);

    setWeekdays(nurse?.weekdays || []);
    setIsRoundingManager(nurse?.isRoundingManager || false);
  }

  async function submitNurseForm() {
    try {
      const payload = { ...values, weekdays, isRoundingManager };

      if (isUpdateForm) {
        await updateNurseServices(nurse?.id || "", payload);
      } else {
        await createNurseServices(payload);
      }

      onFormSubmitted();
      resetForm();

      publish("showAlert", { message: "New nurse added." });
    } catch (err: any) {
      publish("showAlert", {
        message: `Can not add nurse: ${err.message}`,
        alertClass: ALERT_TYPE_CLASS.FAILED,
      });
    }
  }

  function onAddClick(event: any) {
    handleSubmit(event);
  }

  const updateWeekdays = (weekday: string, isAdd: boolean) => {
    if (isAdd) {
      const newWeekdays = [...weekdays, weekday];
      setWeekdays(newWeekdays);
    } else {
      const newWeekdays = weekdays.filter((day) => weekday !== day);
      setWeekdays(newWeekdays);
    }
  };

  const updateRoundingManager = (isRndManager: boolean) => {
    setIsRoundingManager(isRndManager);
  };

  const isWeekdayEnabled = (weekday: string): boolean => {
    return weekdays.includes(weekday);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            onChange={handleChange}
            value={values?.name || ""}
          />

          {errors?.name && (
            <small className="form-text text-danger">{errors?.name}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={values?.email || ""}
          />

          {errors?.email && (
            <small className="form-text text-danger">{errors?.email}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="startTimeInputEmail1">Start time</label>
          <input
            name="startTime"
            type="text"
            className="form-control"
            id="startTimeInputEmail1"
            placeholder="hh:mm"
            onChange={handleChange}
            value={values?.startTime || ""}
          />

          {errors?.startTime && (
            <small className="form-text text-danger">{errors?.startTime}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="endTimeInputEmail1">End time</label>
          <input
            name="endTime"
            type="text"
            className="form-control"
            id="endTimeInputEmail1"
            placeholder="hh:mm"
            onChange={handleChange}
            value={values?.endTime || ""}
          />

          {errors?.endTime && (
            <small className="form-text text-danger">{errors?.endTime}</small>
          )}
        </div>

        <div>
          <label>Weekdays</label>
          <div className="form-check">
            <div className="weekday-wrapper">
              {WEEKDAYS.map((weekday) => (
                <div key={weekday}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={weekday}
                    checked={isWeekdayEnabled(weekday)}
                    onChange={() => {
                      updateWeekdays(weekday, !isWeekdayEnabled(weekday));
                    }}
                  />
                  <label className="form-check-label" htmlFor={weekday}>
                    {capitalize(weekday)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={isRoundingManager}
            onClick={() => {
              updateRoundingManager(!isRoundingManager);
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Add as a Rounding Manager
          </label>
        </div>

        <button onClick={onAddClick} className="btn btn-secondary">
          {isUpdateForm ? "Update" : "Add"} Nurse
        </button>
      </form>
    </div>
  );
};

export default NurseForm;
