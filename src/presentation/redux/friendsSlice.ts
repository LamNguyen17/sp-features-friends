import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Friend = { id: string| number; name: string }

const friendSlice = createSlice({
    name: 'friends',
    initialState: { list: [] as Friend[] },
    reducers: {
        setFriends: (state: any, action: PayloadAction<Friend[]>) => {
            state.list = action.payload
        }
    }
})

export const { setFriends } = friendSlice.actions
export const friendsReducer = friendSlice.reducer
