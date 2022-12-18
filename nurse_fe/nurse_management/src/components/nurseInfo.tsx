import { ALERT_TYPE_CLASS } from "../constanst";

import { deleteNurseServices } from "../services/nurseServices";

import { publish } from "../event";

import { INurse } from "../types";
export interface INurseInfoProps {
  nurse: INurse;
  onUpdateClick: (event: any, nurse: INurse) => void;
  updateListCallback: () => void;
}

const NurseInfo: React.FC<INurseInfoProps> = ({
  nurse,
  onUpdateClick,
  updateListCallback,
}) => {
  async function deleteNurse() {
    try {
      await deleteNurseServices(nurse?.id);

      publish("showAlert", { message: "Nurse deleted" });

      updateListCallback();
    } catch (err: any) {
      publish("showAlert", {
        message: `Can not delete nurse: ${err.message}`,
        alertClass: ALERT_TYPE_CLASS.FAILED,
      });
    }
  }

  return (
    <div className="list-group-item user-info-wrapper">
      <div>
        <li>
          <div>
            <label>Name:</label> {nurse.name || "N/A"}
          </div>

          <div>
            <label>Email:</label> {nurse.email || "N/A"}
          </div>

          <div>
            <label>Weekdays:</label> {nurse.weekdays.join(", ") || "N/A"}
          </div>

          <div>
            <label>Start Time:</label>

            <span>{nurse.startTime || "N/A"}</span>
          </div>

          <div>
            <label>End Time:</label> {nurse.endTime || "N/A"}
          </div>

          <div>
            <label>Is Rounding Manager:</label>{" "}
            {nurse.isRoundingManager ? "Yes" : "No"}
          </div>
        </li>
      </div>

      {nurse?.image && (
        <div>
          <img className="nurse-img" src={nurse.image} alt="user" />
        </div>
      )}

      <div>
        <button
          className="btn btn-success"
          onClick={(event) => onUpdateClick(event, nurse)}
        >
          Update
        </button>
        <button className="btn btn-danger" onClick={deleteNurse}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NurseInfo;
