import "react-toastify/dist/ReactToastify.css";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AuthServices from "../../../Services/auth.service";
// ** Redux Imports
import { Dispatch } from "redux";
// ** Types Imports
import { IAuth } from "../../../types/auth";
import ProfileServices from "../../../Services/profile.service";
import cookies from "src/utils/cookies";
import { toast } from "react-toastify";
import { xAPIKey } from "./constants";

interface InitialState {
  auths: IAuth[] | [];
  auth: IAuth | {};
  total: number;
  params: {};
  status: "pending" | "error" | "success" | "idle";
  user: {};
  session: {};
  refreshToken: string;
  accessToken: string;
  uAccessToken: string;
  xAPIKey: string;
}

interface DataParams {
  q: string;
  role: string;
  status: string;
  currentPlan: string;
}

interface Redux {
  getState: any;
  dispatch: Dispatch<any>;
}

// ** Fetch Client
export const fetchAction = createAsyncThunk(
  "auth/fetch",
  async (id: string) => {
    return { id };
  }
);

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

// ** Add Client
export const loginAction = createAsyncThunk(
  "auth/login",
  async (data: any, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      let response = await AuthServices.login(data);
      const sessionResponse = await AuthServices.session(
        data.email,
        data.email
      );
      // update the values of Auth login response from session response
      response["accessToken"] = sessionResponse["accessToken"];
      response["refreshToken"] = sessionResponse["refreshToken"];

      console.log("sessionResponse: ");
      console.log(sessionResponse);
      dispatch(slice.actions.handleUser(response.data.data));
      dispatch(slice.actions.handleSession(sessionResponse));

      // dispatch(slice.actions.handleSession)
      toast.success(response.data.message);
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (data: any, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await AuthServices.signup(data);
      toast.success(response.data.message || "Success");
      dispatch(slice.actions.handleUser(response.data.data));
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

export const businessInformationAction = createAsyncThunk(
  "auth/business",
  async (data: any, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await AuthServices.businessAdd(data);
      console.log(response.data);
      toast.success(response.data.message || "Success");
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

export const profileAction = createAsyncThunk(
  "setting/profile",
  async (data: any, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await ProfileServices.update(data);
      toast.success(response.data.message || "Success");
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);

export const verifyAction = createAsyncThunk(
  "auth/verify",
  async (data: any, { getState, dispatch }: Redux) => {
    try {
      const response = await AuthServices.verify();
      dispatch(slice.actions.handleUser(response.data.data));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      cookies.remove("accessToken");
      window.location.href = "/auth/user-role";
      return error.response.data;
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/signout",
  async (data: any, { getState, dispatch }: Redux) => {
    dispatch(slice.actions.handleStatus("pending"));
    try {
      const response = await AuthServices.logout();
      toast.success(response.data.message);
      dispatch(slice.actions.handleStatus("success"));
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong!");
      dispatch(slice.actions.handleStatus("error"));
      return error.response.data;
    }
  }
);
// @ts-ignore
export const slice = createSlice({
  name: "auth",
  initialState: {
    auths: [],
    auth: {},
    total: 0,
    params: {},
    user: {},
    session: {},
    refreshToken: null,
    accessToken: null,
    xAPIKey: xAPIKey,
  } as InitialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
    handleUser: (state, action) => {
      action.payload.user.role_code = action.payload.user.role.code;
      return {
        ...state,
        user: action.payload.user,
        refreshToken: action.payload.tokens.refreshToken,
        accessToken: action.payload.tokens.accessToken,
      };
    },
    handleSession: (state, action) => {
      return {
        ...state,
        session: action.payload,
      };
    },
  },
  // extraReducers: builder => {
  //     builder.addCase(fetchAllAction.fulfilled, (state, action) => {
  //         const { data } = action.payload;

  //         state.examples = data.examples || []
  //         state.total = data.examples.length || 0
  //     })
  //     builder.addCase(fetchAction.fulfilled, (state, action) => {
  //         const { id } = action.payload;
  //         state.example = state.examples.find((example: any) => example.id === id) || {};
  //     })
  // }
});

export default slice.reducer;
