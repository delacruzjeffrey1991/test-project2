
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
    fetchAllAction,
    fetchAction,
    addAction,
    updateAction,
    deleteAction
} from '../../store/apps/surveyexample'

import { surveySchema } from '../../schema'

const defaultValues = {
    name: '',
}

export const useSurvey = (serviceId: string | null) => {

    // ** Hook
    const dispatch = useDispatch<AppDispatch>()
    //   const { handleDrawer, handleModal } = useToggleDrawer();
    const store = useSelector((state: RootState) => state.survey)
    const form = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(surveySchema.add)
    })

    useEffect(() => {
        serviceId && dispatch(fetchAction(serviceId))
    }, [serviceId])

    useMemo(() => {
        if (store.survey && serviceId) {
            // @ts-ignore
            form.setValue('name', store.survey.name)
        }
        else {
            form.setValue('name', '')
        }
    }, [store.survey, serviceId])

    const getSurvey = async (data: any) => {
        dispatch(fetchAllAction({ ...data }))
            .then(({ payload }: any) => {
                // console.log('payload',payload)
                if (payload.statusCode === "10000") {
                    form.reset()
                    // handleDrawer(null)
                } else {
                    // console.log('============API_ERROR===============');
                    // console.log(payload);
                    // console.log('====================================');
                }
            })
    }

    const addSurvey = async (data: any) => {
        dispatch(addAction({ ...data }))
            .then(({ payload }: any) => {
                if (payload.statusCode === "10000") {
                    form.reset()
                    // handleDrawer(null)
                } else {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    const updateSurvey = async (id: string, data: any) => {
        dispatch(updateAction({ id, data }))
            .then(({ payload }: any) => {
                if (payload.statusCode === "10000") {
                    form.reset()
                    //   handleDrawer(null)
                } else {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    const deleteSurvey = async (id: string) => {
        dispatch(deleteAction(id))
            .then(({ payload }: any) => {
                if (payload.statusCode === "10000") {
                    form.reset()
                    //   handleModal(null)
                } else {
                    console.log('============API_ERROR===============');
                    console.log(payload);
                    console.log('====================================');
                }
            })
    }

    return { form, store, addSurvey, updateSurvey, deleteSurvey,getSurvey }

}
