import React from 'react'
import {FriendsScreen} from '../screens/FriendsScreen'
import type {FriendsDeps} from '../types/injection'

export const registerFriends = (Stack: any, deps: FriendsDeps) => {
    return (
        <Stack.Screen name="Friends">
            {(props: any) => <FriendsScreen {...props} deps={deps}/>}
        </Stack.Screen>
    )
}
