import { memo, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import EditItem from "./EditItem";
import Overlay from "./Overlay";

const List = ({ jobs, status }) => {
  const [updatedJobs, setUpdatedJobs] = useState(jobs);
  console.log(jobs);
  const handleDrag = (startIndex, endIndex) => {
    console.log({startIndex})
    console.log({endIndex})
    const updatedList = [...updatedJobs];
    const [removed] = updatedList.splice(startIndex, 1);
    updatedList.splice(endIndex, 0, removed);
    console.log(updatedList)
    setUpdatedJobs(updatedList);
  };
  const editingIndex = jobs.findIndex((job) => job.isEditing);
  return (
    <div className="list p-t-5">
      <Overlay active={editingIndex !== -1} />
      <ul className="list-item">
        {jobs?.map((jobItem, index) => {
          console.log(jobItem.isEditing);
          if (jobItem.status === status) {
            return (
              <li
                className="list-item item p-5"
                key={index}
                style={{
                  "z-index": `${jobItem.isEditing ? "9999" : "0"}`,
                  backgroundColor: `${
                    jobItem.isEditing ? "#fff" : "cadetblue"
                  }`,
                }}
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.setData("text/plain", index);
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  const startIndex = Number(
                    event.dataTransfer.getData("text/plain")
                  );
                  const endIndex = index;
                  handleDrag(startIndex, endIndex);
                }}
              >
                {jobItem.isEditing ? (
                  <EditItem job={jobItem} index={index} />
                ) : (
                  <TodoItem job={jobItem} index={index} />
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default memo(List);
