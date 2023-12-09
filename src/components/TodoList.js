import React, { useReducer, useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";
import * as actions from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";

const TodoList = ({ status }) => {
  const { jobs } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  const inputRef = useRef();
  const [job, setJob] = useState("");
  const handleSubmit = () => {
    if (job) {
      dispatch(actions.addJob(job, status));
      setJob("");
      inputRef.current.focus();
      //console.log(status);
    }
  };

  const handleOnChange = (e) => {
    setJob(e.target.value);
  };


  return (
    <div className="todo-list-item p-5">
      <div className="list-header p-5">
        <div className="title">
          <h2>{status}</h2>
        </div>
      </div>
      <div className="add-item">
        <div className="add-item add-item-form">
          <div className="input-add">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter the tilte of work..."
              id="input"
              value={job}
              onChange={handleOnChange}
            />
          </div>
          <button className="btn btn-add" onClick={() => handleSubmit()}>
            <div className="icon icon-add">
              <GrAdd />
            </div>
            <span>Add</span>
          </button>
        </div>
      </div>
      <List jobs={jobs} status={status} />
    </div>
  );
};

export default TodoList;
