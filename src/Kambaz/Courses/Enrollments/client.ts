import axios from "axios";
const API = "/api/enrollments";

export const enroll = async (userId: string, courseId: string) => {
  const response = await axios.post(API, { userId, courseId });
  return response.data;
};

export const unenroll = async (userId: string, courseId: string) => {
  const response = await axios.delete(API, { data: { userId, courseId } });
  return response.data;
};

export const findCoursesForUser = async (userId: string) => {
  const response = await axios.get(`${API}/user/${userId}`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${API}/course/${courseId}`);
  return response.data;
};