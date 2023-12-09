import { useEffect, useRef, useState } from "react";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const EditItem = ({ job, index }) => {
  //console('edit')

  const [value, setValue] = useState(job.title);
  const dispatch = useDispatch();
  const editRef = useRef();
  useEffect(() => {
    editRef.current.focus();
  }, []);
  const handleSaveClick = (index, value) => {
    dispatch(actions.updateJob(index, value));
    dispatch(actions.setIsEditing(index));
  };

  return (
      <div className="edit-item">
          <input
            ref={editRef}
            className="item-title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{zIndex: '9999'}}
          />
          <div style={{ display: "flex" }}>
            <button
              className="btn btn-update"
              onClick={() => handleSaveClick(index, value)}    
            >
              Lưu
            </button>
          </div>
      </div>
  );
};

export default EditItem;
