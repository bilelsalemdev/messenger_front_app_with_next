import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    name: string
    email: string
    avatar: {
        src: string;
        [key: string]: any
    } | null
    id: number | null

}

const initialState: UserState = {
    name: '',
    email: '',
    avatar: null,
    id: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
            state.id = action.payload.id
        }

    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer