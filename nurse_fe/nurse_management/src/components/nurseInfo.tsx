import BootstrapModal from "./bootstrapModal";
import NurseForm from "./nurseForm";

import { INurse } from "../types";
export interface INurseInfoProps {
  nurse: INurse;
  onUpdateClick: (event: any, nurse: INurse) => void;
}

const NurseInfo: React.FC<INurseInfoProps> = ({ nurse, onUpdateClick }) => {
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

      <div>
        <button
          className="btn btn-success"
          onClick={(event) => onUpdateClick(event, nurse)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NurseInfo;
