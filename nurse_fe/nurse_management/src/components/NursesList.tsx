import { useState, useEffect } from "react";
import { useTypedSelector } from "../hooks/userTypedSelector";
import NurseForm from "./nurseForm";

import { fetchAllNurses } from "../services/nurseServices";

import BootstrapModal from "./bootstrapModal";

import { INurse } from "../types";

import NurseInfo from "./nurseInfo";

export interface INurseListProps {}

const NurseList: React.FC<INurseListProps> = () => {
  const [nurseList, setNurseList] = useState([]);

  const [selectedNurseForUpdate, setSelectedNurseForUpdate] =
    useState<INurse>();

  const fetchAndSetNurseList = async () => {
    const list = await fetchAllNurses();
    setNurseList(list);
  };

  const closAddNurseeModal = () => {
    $("#nurseModal").modal("hide");
    fetchAndSetNurseList();
  };

  const openAddNurseModal = (isUpdating: boolean = false, nurse?: INurse) => {
    if (isUpdating) {
      setSelectedNurseForUpdate(nurse);
    }
    $("#nurseModal").modal("show");
  };

  useEffect(() => {
    fetchAndSetNurseList();
  }, []);

  return (
    <div>
      <h3>Available Nurses</h3>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openAddNurseModal()}
      >
        Add new nurse
      </button>

      <BootstrapModal hideFooter={true} dataTargetId="nurseModal">
        <NurseForm
          onFormSubmitted={closAddNurseeModal}
          isUpdateForm={true}
          nurse={selectedNurseForUpdate}
        ></NurseForm>
      </BootstrapModal>

      {nurseList.length > 0 ? (
        <div>
          <div>
            <ul className="list-group">
              {nurseList.map((nurse: INurse) => (
                <NurseInfo
                  key={nurse.id}
                  nurse={nurse}
                  onUpdateClick={(event: any, nurse: INurse) => {
                    openAddNurseModal(true, nurse);
                  }}
                ></NurseInfo>
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
