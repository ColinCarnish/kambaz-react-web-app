import axios from "axios";

const API = "/api/assignments";

export const createAssignment = async (assignment: any) => {
  const response = await axios.post(API, assignment);
  return response.data;
};

export const findAllAssignments = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  await axios.delete(`${API}/${aid}`);
};
