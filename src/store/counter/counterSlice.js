import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchUserById = createAsyncThunk(
    //name of the action
    'users/fetchByIdStatus',
    // this is the actual function that will be called
    async (userId,thunkAPI) => {
        const response = await (userId)
        return response.data
        // in case of error we've to throw an error
        // throw 'test'
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        // [fetchUserById.pending]: (state, action) => {
        //
        // },
        // [fetchUserById.fulfilled]: (state, action) => {
        //
        // },
        // [fetchUserById.rejected]: (state, action) => {
        //
        // },
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// we can also select the values that we are using in the state as listed below

export const selectCounterVale = (state) => state.counter.value


export default counterSlice.reducer;