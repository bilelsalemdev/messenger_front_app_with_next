import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { create } from 'domain';

export interface UserState {
    name: string
    email: string
    avatar: {
        src: string;
        [key: string]: any
    } | null
    id: number | null
    conversations: any[],
    status: 'idle' | 'loading' | 'failed' | 'success'

}

const initialState: UserState = {
    name: '',
    email: '',
    avatar: null,
    id: null,
    conversations: [],
    status: 'idle',
}


export const fetchConversations = createAsyncThunk('user/fetchConversations',

    async () => {
        console.log('hrere')
        const response = await fetch('http://localhost:4000/api/v1/conversation', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()
        console.log("data from", data)
        return data.data
    }
)


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
    extraReducers: (builder) => {
        builder.addCase(fetchConversations.pending, (state, action) => {
            console.log("pending")
            state.status = 'loading'

        }).addCase(fetchConversations.fulfilled, (state, action) => {
            state.status = 'success'
            console.log(action.payload)
            state.conversations = action.payload
        }
        ).addCase(fetchConversations.rejected, (state, action) => {
            state.status = 'failed'
        }
        )
    }

})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer