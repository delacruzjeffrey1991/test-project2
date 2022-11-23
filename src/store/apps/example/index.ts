

// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import Service from '../../../Services/example.service'

// ** Types Imports
import { IExample } from '../../../types/example'

interface InitialState {
    examples: IExample[] | [];
    example: IExample | {};
    total: number;
    params: {};
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
export const fetchAllAction = createAsyncThunk(
    'example/fetchAll',
    async (params: DataParams) => {
        const response = await Service.getAll();
        return response.data
    }
)

// ** Add Client
export const addAction = createAsyncThunk(
    'example/add',
    async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await Service.add(data);
            dispatch(fetchAllAction(getState().user.params))
            toast.success("Assignment Added successfully!")
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

// ** Add Client
export const updateAction = createAsyncThunk(
    'example/update',
    async ({ id, data }: { id: string, data: IExample }, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await Service.update(id, data);
            dispatch(fetchAllAction(getState().user.params))
            toast.success("Assignment updated succesfully!")
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

// ** Delete Client
export const deleteAction = createAsyncThunk(
    'example/delete',
    async (id: string, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await Service.delete(id);
            dispatch(fetchAllAction(getState().user.params))
            toast.success("Assignment deleted succesfully!")
            dispatch(slice.actions.handleStatus('success'))
            return response.data
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

// @ts-ignore
export const slice = createSlice({
    name: 'example',
    initialState: {
        examples: [],
        example: {},
        total: 0,
        params: {},
    } as InitialState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAllAction.fulfilled, (state, action) => {
            const { data } = action.payload;

            state.examples = data.examples || []
            state.total = data.examples.length || 0
        })
        builder.addCase(fetchAction.fulfilled, (state, action) => {
            const { id } = action.payload;
            state.example = state.examples.find((example: any) => example.id === id) || {};
        })
    }
})

export default slice.reducer
