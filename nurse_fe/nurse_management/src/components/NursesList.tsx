import { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/userTypedSelector";

import { fetchAllNurses } from "../services/nurseServices";

export interface INurseListProps {}

const NurseList: React.FC<INurseListProps> = () => {
  // const { data, error, loading }: { data: any; error: any; loading: any } =
  //   useTypedSelector((state) => state.userReducer);
  // return <div>Nurse List page user: {data?.name}</div>;

  const [nurseList, setNurseList] = useState([]);

  const fetchAndSetNurseList = async () => {
    const list = await fetchAllNurses();
    setNurseList(list);
  };

  useEffect(() => {
    fetchAndSetNurseList();
  }, []);

  return (
    <div>
      {nurseList.length > 0 ? (
        <div>
          <div>
            <ul className="list-group">
              {nurseList.map((nurse: any) => (
                <div>
                  <li className="list-group-item">
                    <div>
                      <label>Name:</label> {nurse.name || "N/A"}
                    </div>

                    <div>
                      <label>Email:</label> {nurse.email || "N/A"}
                    </div>

                    <div>
                      <label>Weekdays:</label>{" "}
                      {nurse.weekdays.join(", ") || "N/A"}
                    </div>

                    <div>
                      <label>Start Time:</label> {nurse.startTime || "N/A"}
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
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>No nurses added</div>
      )}
    </div>
  );
};

export default NurseList;
