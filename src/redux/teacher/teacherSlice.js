import {
  addTeacher,
  deleteTeacherById,
  fetchTeacherByName,
  fetchTeachers,
  updateTeacher,
} from './teacherOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  teacher: [],
  isloading: false,
  marker: null,
  operetion: null,
  error: null,
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.teacher = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(fetchTeacherByName.pending, state => {
        state.marker = null;
        state.operetion = 'fatchTeacherByName';
        state.isloading = true;
      })
      .addCase(fetchTeacherByName.fulfilled, (state, action) => {
        state.marker = 'fetchTeacherByNameComplit';
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        state.teacher = action.payload.teacher;
      })
      .addCase(fetchTeacherByName.rejected, (state, action) => {
        state.marker = null;
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addTeacher.pending, state => {
        state.isloading = true;
        state.operetion = 'addTeacher';
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.teacher.push(action.payload);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(updateTeacher.pending, state => {
        state.isloading = true;
        state.operetion = 'addTeacher';
      })
      .addCase(updateTeacher.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const id = action.payload._id;
        const index = state.teacher.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.teacher[index] = action.payload;
        }
      })
      .addCase(updateTeacher.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(deleteTeacherById.pending, state => {
        state.isloading = true;
      })
      .addCase(deleteTeacherById.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.teacher.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.teacher.splice(index, 1);
        }
      })
      .addCase(deleteTeacherById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teacherSlice.reducer;
