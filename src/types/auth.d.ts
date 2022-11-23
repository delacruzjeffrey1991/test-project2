export type ErrCallbackType = (err: { [key: string]: string }) => void

export interface IAuth {
  [key: any]: any
}


export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  id: number
  role: { id: string, code: string }
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}

export type AuthValuesType = {
  loading: boolean
  setLoading: (value: boolean) => void
  logout: () => void
  isInitialized: boolean
  user: UserDataType | null
  setUser: (value: UserDataType | null) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}


export type BusinessInfoType = {
  onSubmit?: () => void,
  onSkip: () => void,
  businessInfo: Dispatch<SetStateAction<any>>;
  setBusinessInfo: Dispatch<SetStateAction<any>>;
}
