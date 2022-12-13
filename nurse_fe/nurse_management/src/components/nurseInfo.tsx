export interface INurse {
  id: number;
  name: string;
  email: string;
  weekdays: string[];
  startTime: number;
  endTime: number;
  isRoundingManager: Boolean;
}

export interface INurseInfoProps {
  nurse: INurse;
}

const NurseInfo: React.FC<INurseInfoProps> = ({ nurse }) => {
  return (
    <div>
      <li className="list-group-item">
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
  );
};

export default NurseInfo;
