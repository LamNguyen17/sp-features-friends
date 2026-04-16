import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Friend = { id: string| number; name: string }

const slice = createSlice({
    name: 'friends',
    initialState: { list: [] as Friend[] },
    reducers: {
        setFriends: (state: any, action: PayloadAction<Friend[]>) => {
            state.list = action.payload
        }
    }
})

export const { setFriends } = slice.actions
export const friendsReducer = slice.reducer
