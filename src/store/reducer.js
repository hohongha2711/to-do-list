import actionTypes from "./actionTypes";
const initState = {
  job: "",
  jobs: [],
};

const reducer = (state = initState, action) => {
  if (!action || !action.type) {
    return state;
  }
  let new_state;
  switch (action.type) {
    case actionTypes.SET_JOB:
      new_state = {
        ...state,
        job: action.payload,
      };
      break;

    case actionTypes.ADD_JOB:
      new_state = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      //console.log(new_state.jobs);
      break;

    case actionTypes.DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      new_state = {
        ...state,
        jobs: newJobs,
      };
      break;

    case actionTypes.UPDATE_JOB:
      new_state = {
        ...state,
        jobs: state.jobs.map((job, index) => {
          if (index === action.payload) {
            // Cập nhật giá trị tại action.payload ở đây
            return {
              ...job,
              title: action.title,
            };
          }
          return job;
        }),
      };
      break;
    case actionTypes.SET_IS_EDITING:
      new_state = {
        ...state,
        jobs: state.jobs.map((job, index) => {
          console.log(job.isEditing)
          if (index === action.payload) {
            // Cập nhật giá trị tại action.payload ở đây
            return {
              ...job,
              isEditing: !job.isEditing,
            };
          }
          return job;
        }),
      };
      break;
    default:
      console.log("Invalid action.");
      return state;
  }
  return new_state;
};

export default reducer;
