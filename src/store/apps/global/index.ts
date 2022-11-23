
// Use this global file to make actions for such apis that only have one crud operation to perform ( GET , POST , PUT  , DELETE )

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import Service from '../../../Services/global.service'

interface GlobalState {
    position_goals: [];
    brand_audits: [];
    posses_cards : []
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
export const positionGoalsFetchAction = createAsyncThunk(
    'postion_goals',
    async (dispatch: Dispatch) => {
        const response = await Service.getPositionGoals();
        dispatch(slice.actions.handlPositionGoals(response.data.data.entities))
    }
    )
    
    // ** Fetch Brand Culture Strategy Brand Audit
export const brandAuditFetchAction = createAsyncThunk(
    'brand_audits',
    async (dispatch: Dispatch) => {
        const response = await Service.getBrandAudits();
       dispatch(slice.actions.handlBrandAudits(response.data.data.entities))
    }
)

    // ** Fetch Brand Culture Strategy Posses Cards
export const possesCardsFetchAction = createAsyncThunk(
    'brand_audits',
    async (dispatch: Dispatch) => {
        const response = await Service.getPossesCards();
       dispatch(slice.actions.handlePossesCards(response.data.data.entities))
    }
)

// @ts-ignore
export const slice = createSlice({
    name: 'global',
    initialState: {
        position_goals: [],
        brand_audits: [],
        posses_cards : []
    } as GlobalState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },
        handlPositionGoals: (state, action) => {
            return { ...state, position_goals: action.payload }
        },
        handlBrandAudits: (state, action) => {
            return { ...state, brand_audits: action.payload }
        },
        handlePossesCards: (state, action) => {
            return { ...state, posses_cards: action.payload }
        }
    }
})

export default slice.reducer
