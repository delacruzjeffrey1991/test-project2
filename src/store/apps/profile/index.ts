

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProfileServices from 'src/Services/profile.service'


// ** Types Imports
import { IExample } from '../../../types/example'

interface InitialState {
    profile: {};
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

// ** Fetch Client
export const fetchAction = createAsyncThunk(
    'example/fetch',
    async (id: string) => {
        return { id }
    }
)

// ** Fetch Clients
// export const fetchAllAction = createAsyncThunk(
//     'example/fetchAll',
//     async (params: DataParams) => {
//         const response = await Service.getAll();
//         return response.data
//     }
// )

// ** Update Profile
export const profileAction = createAsyncThunk(
    'setting/profile',
    async (data: any, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await ProfileServices.update(data);
            if (response) {
                toast.success(response.data.message || "Success")
            }
            dispatch(slice.actions.handleProfile(response.data.data.user))
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)


// @ts-ignore
export const slice = createSlice({
    name: 'profile',
    initialState: {
        profile: {},
    } as InitialState,
    reducers: {
        handleStatus: (state, action) => {
            return { ...state, status: action.payload }
        },
        handleProfile: (state, action) => {
            return { ...state, profile: action.payload }
        },
    },

})

export default slice.reducer
