// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

// ** Reducers
import example from "./apps/example";
import survey from "./apps/surveyexample";
import auth from "./apps/auth";
import profile from "src/store/apps/profile";
import category from "src/store/apps/categories";
import global from "src/store/apps/global";
import learningModule from "src/store/apps/NewCourseForm";

export const store = configureStore({
  reducer: {
    example,
    survey,
    auth,
    profile,
    category,
    global,
    learningModule,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export interface Redux {
  getState: any;
  dispatch: Dispatch<any>;
}
