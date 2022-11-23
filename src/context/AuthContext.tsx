// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import
import { useNavigate } from "react-router-dom";

// ** Axios
import axios from "axios";

// ** Config
import authConfig from "src/config/auth";

import { AuthServices } from "src/Services";

// ** Types
import {
    AuthValuesType,
    RegisterParams,
    LoginParams,
    ErrCallbackType,
    UserDataType,
} from "src/types/auth";

// ** Defaults
const defaultProvider: AuthValuesType = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    isInitialized: false,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    setIsInitialized: () => Boolean,
    register: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
    children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    // ** States
    const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
    const [isInitialized, setIsInitialized] = useState<boolean>(
        defaultProvider.isInitialized
    );

    // ** Hooks
    const router = useNavigate();

    useEffect(() => {
        const initAuth = async (): Promise<void> => {
            // const ddd = window.localStorage.getItem(authConfig.storageTokenKeyName)
            // console.log('====================================');
            // console.log("initAuth", ddd);
            // console.log('====================================');
            // AuthServices.me()
            //   .then((data) => {
            //     console.log('====================================');
            //     console.log("initAuth", data);
            //     console.log('====================================');
            //   })
            //   .catch((error) => {
            //     console.log('====================================');
            //     console.log("initAuth", error.response);
            //     console.log('====================================');
            //   })
            //   setIsInitialized(true)
            //   const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
            //   if (storedToken) {
            //     setLoading(true)
            //     await axios
            //       .get(authConfig.meEndpoint, {
            //         headers: {
            //           Authorization: storedToken
            //         }
            //       })
            //       .then(async response => {
            //         setLoading(false)
            //         setUser({ ...response.data.userData })
            //       })
            //       .catch(() => {
            //         localStorage.removeItem('userData')
            //         localStorage.removeItem('refreshToken')
            //         localStorage.removeItem('accessToken')
            //         setUser(null)
            //         setLoading(false)
            //       })
            //   } else {
            //     setLoading(false)
            //   }
        };
        initAuth();
    }, []);

    const handleLogin = (
        params: LoginParams,
        errorCallback?: ErrCallbackType
    ) => {
        AuthServices.login(params)
            .then(async ({ data: response }) => {
                console.log("==========Login data================");
                console.log(response);
                console.log("====================================");

                // save token in localStorage
                window.localStorage.setItem(
                    authConfig.storageTokenKeyName,
                    response.data.tokens.accessToken
                );
                window.localStorage.setItem(
                    authConfig.refreshTokenKeyName,
                    response.data.tokens.accessToken
                );

                // const returnUrl = router.query.returnUrl;
                const returnUrl: string = '/login';

                setUser({ ...response.data.user });
                window.localStorage.setItem(
                    "userData",
                    JSON.stringify(response.data.user)
                );

                const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";

                router(redirectURL as string)
            })
            .catch((error) => {
                if (errorCallback) errorCallback(error.response?.data);
            });
    };

    const handleLogout = () => {
        setUser(null);
        setIsInitialized(false);
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem(authConfig.storageTokenKeyName);
        window.localStorage.removeItem(authConfig.refreshTokenKeyName);
        router('/login')
    };

    // const handleRegister = (
    //     params: RegisterParams,
    //     errorCallback?: ErrCallbackType
    // ) => {
    //     axios
    //         .post(authConfig.registerEndpoint, params)
    //         .then((res) => {
    //             if (res.data.error) {
    //                 if (errorCallback) errorCallback(res.data.error);
    //             } else {
    //                 handleLogin({ email: params.email, password: params.password });
    //             }
    //         })
    //         .catch((err: { [key: string]: string }) =>
    //             errorCallback ? errorCallback(err) : null
    //         );
    // };

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        isInitialized,
        setIsInitialized,
        login: handleLogin,
        logout: handleLogout,
        // register: handleRegister,
    };

    // return (
    //     <AuthContext.Provider value= { values } > { children } </AuthContext.Provider>
    // );
    // @ts-ignore
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

export { AuthContext, AuthProvider };
