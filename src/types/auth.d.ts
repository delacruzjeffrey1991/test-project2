export type ErrCallbackType = (err: { [key: string]: string }) => void;

export interface IAuth {
  [key: any]: any;
}

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  email: string;
  username: string;
  password: string;
};

export type UserDataType = {
  id: number;
  role: { id: string; code: string };
  email: string;
  fullName: string;
  username: string;
  password: string;
  avatar?: string | null;
};

export type AuthValuesType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
  logout: () => void;
  isInitialized: boolean;
  user: UserDataType | null;
  setUser: (value: UserDataType | null) => void;
  setIsInitialized: (value: boolean) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void;
};

export type metadataValuesType = {
  exif: {
    DateTimeOriginal: string;
  };
  gps: {
    lat: number | null;
    lng: number | null;
  };
  height: number;
  isFull: boolean;
  orientation: number;
  width: number;
};

export type fileValuesType = {
  attributes: {
    extension: "jpg" | string;
    metadata: metadataValuesType;
    mimeType: string;
    name: string;
    size: number;
  };
  fileId: string;
  fileUrl: string;
  type: "image" | string;
  updatedAt: string;
};

export type userValuesType = {
  avatarCustomUrl: string;
  avatarFileId: string;
  createdAt: string;
  displayName: string;
  flagCount: number;
  hashFlag: null | any;
  isDeleted: boolean;
  isGlobalBan: boolean;
  metadata: metadataValuesType;
  path: string;
  permission: Array;
  roles: Array;
  updatedAt: string;
  userId: string;
  _id: number;
};

export type SessionValuesType = {
  accessToken: string;
  expiresAt: string;
  files:
    | {
        [number]: fileValuesType;
      }[]
    | null;
  issuesAt: string;
  refreshToken: string;
  users:
    | {
        [number]: userValuesType;
      }[]
    | null;
};

export type BusinessInfoType = {
  onSubmit?: () => void;
  onSkip: () => void;
  businessInfo: Dispatch<SetStateAction<any>>;
  setBusinessInfo: Dispatch<SetStateAction<any>>;
};
