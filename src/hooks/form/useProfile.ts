
import { useEffect, useMemo } from 'react'

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
    fetchAction,
} from '../../store/apps/example'

import {
    profileAction
} from '../../store/apps/profile'


import { register } from '../../schema'

import { exampleSchema } from '../../schema'

const defaultValues = {
    name: '',
}

export const useProfile = (serviceId: string | null) => {

    // ** Hook
    const dispatch = useDispatch<AppDispatch>()
    //   const { handleDrawer, handleModal } = useToggleDrawer();
    const store = useSelector((state: RootState) => state.profile)
    const form = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(exampleSchema.add)
    })

    const profileForm = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(register.register)
    })

    useEffect(() => {
        serviceId && dispatch(fetchAction(serviceId))
    }, [serviceId])

    // useMemo(() => {
    //     if (store.example && serviceId) {
    //         // @ts-ignore
    //         form.setValue('name', store.example.name)
    //     }
    //     else {
    //         form.setValue('name', '')
    //     }
    // }, [store.example, serviceId])

    const userProfile = async (data: any) => {
        dispatch(profileAction({ ...data }))
            .then(({ payload }: any) => {
                try {
                    console.log(payload);
                    profileForm.reset()
                } catch (error) {
                    console.log('============profile API_ERROR===============');
                    console.log(payload);
                }
            })
    }


    return { form, store, userProfile }

}
