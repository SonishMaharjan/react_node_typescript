import { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/userTypedSelector";

import { fetchAllNurses } from "../services/nurseServices";


import { INurse } from "./nurseInfo";

import NurseInfo from "./nurseInfo";

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
      <h3>Available Nurses</h3>
      {nurseList.length > 0 ? (
        <div>
          <div>
            <ul className="list-group">
              {nurseList.map((nurse: INurse) => (
                <NurseInfo key={nurse.id} nurse={nurse}></NurseInfo>
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
