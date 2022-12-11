import { useEffect, useState } from "react";

import { fetchAllNurses as fetchAllNursesServices } from "../services/nurseServices";

export interface INurseDetailPageProps {}

const NurseDetailPage: React.FC<INurseDetailPageProps> = () => {
  //   const [term, setTerm] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [nurseList, setNurseList] = useState([]);

  useEffect(() => {
    fetchAllNurses();
  }, []);

  const fetchAllNurses = async () => {
    setIsLoading(true);
    try {
      const nurseListResponse = await fetchAllNursesServices();

      setNurseList(nurseListResponse);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {nurseList.map((nurse: any) => {
        return <div key={nurse.id}>{nurse.name}</div>;
      })}
    </div>
  );
};

export default NurseDetailPage;
