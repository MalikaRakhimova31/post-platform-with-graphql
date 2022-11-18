import { createSlice } from '@reduxjs/toolkit';


 const postSlice = createSlice({
    name: 'posts',
     initialState: {
         data: []
    },
    reducers: {
        postReducer: (state, action) => {
            state.data.unshift(action.payload)
        }
    }
})

export const {postReducer} = postSlice.actions
export default postSlice.reducer