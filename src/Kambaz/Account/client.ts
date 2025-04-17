import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

const API_BASE = "/api/users";

export const signin = async (credentials: any) => {
  const response = await fetch(`${API_BASE}/signin`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};

export const signup = async (user: any) => {
  const response = await fetch(`${API_BASE}/signup`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (response.status === 200) {
    return response.json();
  } else {
    const err = await response.json();
    alert(err.message);
    return null;
  }
};

export const profile = async () => {
  const response = await fetch(`${API_BASE}/profile`, {
    method: "POST",
    credentials: "include",
  });
  return await response.json();
};

export const signout = async () => {
  await fetch(`${API_BASE}/signout`, {
    method: "POST",
    credentials: "include",
  });
};

export const updateUser = async (user: any) => {
  const response = await fetch(`${API_BASE}/${user._id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
};
export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};  

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};
export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};
export const findAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/users", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Error in findAllUsers:", error);
    throw error;
  }
};

export const findUsersByRole = async (role: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}?role=${role}`);
    return response.data;
  }

export const findUsersByPartialName = async (name: string) => {
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete( `${USERS_API}/${userId}` );
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};



  


  
  

  
  
  
