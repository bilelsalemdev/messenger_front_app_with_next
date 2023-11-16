import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    name: string
    email: string
    avatar: string
    id: number | null

}

const initialState: UserState = {
    name: '',
    email: '',
    avatar: '',
    id: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer