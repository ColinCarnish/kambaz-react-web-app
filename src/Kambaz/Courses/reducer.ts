import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  _id: string;
  name: string;
  description: string;
}

interface CoursesState {
  courses: Course[];
  selectedCourse: Course | null;
}

const initialState: CoursesState = {
  courses: [],
  selectedCourse: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      const index = state.courses.findIndex((c) => c._id === action.payload._id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },
    selectCourse: (state, action: PayloadAction<Course | null>) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const { addCourse, updateCourse, deleteCourse, selectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;