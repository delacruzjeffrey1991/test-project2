
// Use this global file to make actions for such apis that only have one crud operation to perform ( GET , POST , PUT  , DELETE )

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { fetchCategories } from '../categories';

import Service from '../../../Services/BCSanswers.service'

interface GlobalState {
    position_goals: [];
    brand_audits: [];
    posses_cards: []
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
export const postBCSanswer = createAsyncThunk(
    'bcsanswer_post',
    async ({ answerBody }: any, { dispatch, getState }: Redux) => {
        try {

            const response = await Service.postBCSanswers(answerBody);
            dispatch(fetchCategories(dispatch))
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const updateBCSanswer = createAsyncThunk(
    'bcsanswer_put',
    async ({ answerBody }: any, { dispatch, getState }: Redux) => {
        try {

            const response = await Service.putBCSanswers(answerBody);
            dispatch(fetchCategories(dispatch))
            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

//     // ** Fetch Brand Culture Strategy Brand Audit
// export const brandAuditFetchAction = createAsyncThunk(
//     'brand_audits',
//     async (dispatch: Dispatch) => {
//         const response = await Service.getBrandAudits();
//        dispatch(slice.actions.handlBrandAudits(response.data.data.entities))
//     }
// )

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
    name: 'global',
    initialState: {
        position_goals: [],
        brand_audits: [],
        posses_cards: []
    } as GlobalState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export default slice.reducer
