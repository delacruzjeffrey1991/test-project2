import { SessionValuesType } from "src/types/auth";
import { createContext } from "react";

const defaultProvider: SessionValuesType = {
  accessToken: "",
  expiresAt: "",
  issuesAt: "",
  refreshToken: "",
  files: null,
  users: null,
};

export const SessionContext = createContext(defaultProvider);
