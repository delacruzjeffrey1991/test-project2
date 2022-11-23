import { useEffect, useMemo } from 'react'
import cookies from 'src/utils/cookies';
import { useNavigate } from 'react-router-dom';

// ** Third Party Imports
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Types import
import { RootState, AppDispatch } from '../../store'

// ** Import Custom hooks
// import useToggleDrawer from "src/@core/hooks/useToggleDrawer"

// ** Actions Imports
import {
    loginAction,
    fetchAction,
    registerAction,
    businessInformationAction,
    logoutAction
} from '../../store/apps/auth'

import { auth } from '../../schema'
import { register } from '../../schema'
import { roles } from 'src/constants/roles';

const defaultValues = {
    email: '',
    password: ''

}

export const useAuth = (data: string | null) => {

    const navigate = useNavigate()
    // ** Hook
    const dispatch = useDispatch<AppDispatch>()
    //   const { handleDrawer, handleModal } = useToggleDrawer();
    const store = useSelector((state: RootState) => state.auth)
    const loginForm = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(auth.login)
    })
    const registerForm = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(register.register)
    })


    useEffect(() => {
        data && dispatch(fetchAction(data))
    }, [data])

    useMemo(() => {
        if (store.auth && data) {
            // @ts-ignore
            loginForm.setValue('email', store.auth.email)
        }
        else {
            loginForm.setValue('email', '')
        }
    }, [store.auth, data])

    const userLogin = async (data: any) => {
        dispatch(loginAction({ ...data }))
            .then(({ payload }: any) => {
                try {
                    loginForm.reset()
                    cookies.set('accessToken', payload.data.tokens.accessToken, { path: '/' });
                    navigate("/")
                } catch (error) {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    const userRegister = async (data: any, role: string) => {
        dispatch(registerAction({ ...data }))
            .then(({ payload }: any) => {

                try {
                    registerForm.reset()
                    cookies.set('accessToken', payload.data.tokens.accessToken, { path: '/' });
                    if (role.toUpperCase() === roles.ADMIN) return navigate("/auth/business-info?tab=1")
                    navigate("/")
                } catch (error) {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }

            })
    }

    const userBusinessAdd = async (data: any) => {
        dispatch(businessInformationAction({ ...data }))
            .then(({ payload }: any) => {
                try {
                    navigate("/")
                } catch (error) {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }

            })
    }

    const userLogout = async (data: any) => {
        dispatch(logoutAction({ ...data }))
            .then(({ payload }: any) => {
                try {
                    cookies.remove("refreshToken")
                    cookies.remove("accessToken")
                    navigate("/auth/user-role")
                } catch (error) {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }

            })
    }

    return { loginForm, registerForm, store, userLogin, userRegister, userBusinessAdd, userLogout }

}
