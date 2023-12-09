import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { memo } from "react";

const TodoItem = ({job, index}) => {
    const dispatch = useDispatch();
    const handleDeleteClick = (index) => {
        dispatch(actions.deleteJob(index));
      };
      const handleUpdatelick = (index) => { 
        dispatch(actions.setIsEditing(index));
      };
    
  return (
    <>
      <div className="item-title">{job.title}</div>
      <div style={{ display: "flex" }}>
        <button
          className="btn btn-update"
          onClick={() => handleUpdatelick(index)}
        >
          Sửa
        </button>
        <button
          className="btn btn-delete"
          onClick={() => handleDeleteClick(index)}
        >
          Xoá
        </button>
      </div>
    </>
  );
};

export default memo(TodoItem);
