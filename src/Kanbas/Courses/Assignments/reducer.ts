import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    _id: new Date().getTime().toString(),
    course: "",
    title: "New Assignment",
    description: "New Assignment Description",
    points: "100",
    due_date: new Date().toISOString(),
    available_from: new Date().toISOString(),
    available_until: new Date().toISOString(),
  },
  defaultValue: {
    _id: new Date().getTime().toString(),
    course: "",
    title: "New Assignment",
    description: "New Assignment Description",
    points: "100",
    due_date: new Date().toISOString(),
    available_from: new Date().toISOString(),
    available_until: new Date().toISOString(),
  },
};
const assignmentsSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) => a._id === assignment._id ? assignment : a);
    },
    setAssignment: (state, { payload: assignment }) => {
      state.assignment = { ...assignment };
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;