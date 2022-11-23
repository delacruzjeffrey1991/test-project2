
// Use this global file to make actions for such apis that only have one crud operation to perform ( GET , POST , PUT  , DELETE )

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { fetchCategories } from '../categories';

import NewCourseFormServices from '../../../Services/NewCourseForm.service'

interface GlobalState {
    learningCourses: [];
    status: 'pending' | 'error' | 'success' | 'idle';
}

interface DataParams {
    q: string
    role: string
    status: string
    currentPlan: string
}

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

// ** Fetch Brand Culture Strategy Position Goals
export const postNewCourseForm = createAsyncThunk(
    'NewCourseForm_post',
    async ({ fieldValue }: any, { dispatch, getState }: Redux) => {
        try {
            
            const response = await NewCourseFormServices.postNewCourseForm(fieldValue);
            dispatch(fetchCategories(dispatch))
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const updateNewCourseForm = createAsyncThunk(
    'NewCourseForm_put',
    async ({ fieldValue }: any, { dispatch, getState }: Redux) => {
        try {

            const response = await NewCourseFormServices.putNewCourseForm(fieldValue);
            dispatch(fetchCategories(dispatch))
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

//     // ** Fetch Brand Culture Strategy Brand Audit
export const brandAuditFetchAction = createAsyncThunk(
    'NewCourseForm_get',
    async (dispatch: Dispatch) => {
        const response = await NewCourseFormServices.getAll();
        dispatch(slice.actions.handleLearning(response.data.data.entities))
       
       
    }
)

//     // ** Fetch Brand Culture Strategy Posses Cards
// export const possesCardsFetchAction = createAsyncThunk(
//     'brand_audits',
//     async (dispatch: Dispatch) => {
//         const response = await Service.getPossesCards();
//        dispatch(slice.actions.handlePossesCards(response.data.data.entities))
//     }
// )

// @ts-ignore
export const slice = createSlice({
    name: 'learningModule',
    initialState: {
        learningCourses: [],
    } as GlobalState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },
        handleLearning: (state, action) => {
            return {...state , learningCourses: action.payload}
        }
    }
})

export default slice.reducer
