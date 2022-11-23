

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import CategoryServices from 'src/Services/category.service'

// ** Types Imports
import { IExample } from '../../../types/example'

interface InitialState {
    categories: IExample[] | [];
    selected_category: {};
    // example: IExample | {};
    // total: number;
    // params: {};
    status: 'pending' | 'error' | 'success' | 'idle';
}

// interface DataParams {
//     q: string
//     role: string
//     status: string
//     currentPlan: string
// }

export interface Redux {
    getState: any
    dispatch: Dispatch<any>
}


// ** Fetch Clients
export const fetchCategories = createAsyncThunk(
    'category',
    async ( dispatch: Dispatch ) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await CategoryServices.getAll();
            dispatch(slice.actions.handleCategories(response.data.data))
            dispatch(slice.actions.handleStatus('success'))
            return response.data
        } catch (error:any) {
            dispatch(slice.actions.handleStatus('error'))
        }
    }
)






// @ts-ignore
export const slice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        selected_category: {},
    } as InitialState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },
        handleCategories: (state, action) => {
            return { ...state, categories: action.payload , selected_category : action.payload[0] }
        },
        handleSelectCategory: (state, action) => {
            return { ...state, selected_category: action.payload }
        },
    },

})

export const { handleSelectCategory } = slice.actions

export default slice.reducer
