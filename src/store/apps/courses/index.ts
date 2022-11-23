// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import Service from "../../../Services/course.service";

// ** Types Imports
import { ICourse } from "../../../types/course";
import { DataParams } from "../../../types/api";
import { Redux } from '../../'

interface InitialState {
  courses: ICourse[] | [];
  course: ICourse | {};
  total: number;
  params: {};
  status: "pending" | "error" | "success" | "idle";
}

// ** Fetch
export const fetchAction = createAsyncThunk("courses/fetch", async (id: string) => {
  return { id };
});

// ** Fetch
export const fetchAllAction = createAsyncThunk("courses/fetchAll", async (params: DataParams) => {
  const response = await Service.getAll();
  return response.data;
});

// ** Add
export const addAction = createAsyncThunk(
  "courses/add",
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await Service.add(data);
      dispatch(fetchAllAction(getState().user.params));
      toast.success("Added successfully!");
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

// ** Add
export const updateAction = createAsyncThunk(
  "courses/update",
  async ({ id, data }: { id: string; data: ICourse }, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await Service.update(data);
      dispatch(fetchAllAction(getState().user.params));
      toast.success("updated succesfully!");
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

// ** Delete
// export const deleteAction = createAsyncThunk("courses/delete", async (id: string, { getState, dispatch }: Redux) => {
//   dispatch(slice.actions.handleStatus("pending"));
//   try {
//     const response = await Service.delete(id);
//     dispatch(fetchAllAction(getState().user.params));
//     toast.success("Assignment deleted succesfully!");
//     dispatch(slice.actions.handleStatus("success"));
//     return response.data;
//   } catch (error: any) {
//     toast.error(error.response.data.message || "Something went wrong!");
//     dispatch(slice.actions.handleStatus("error"));
//     return error.response.data;
//   }
// });

// @ts-ignore
export const slice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    course: {},
    total: 0,
    params: {},
  } as InitialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllAction.fulfilled, (state, action) => {
      const { data } = action.payload;

      state.courses = data.courses || [];
      state.total = data.courses.length || 0;
    });
    builder.addCase(fetchAction.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.course = state.courses.find((courses: any) => courses.id === id) || {};
    });
  },
});

export default slice.reducer;
