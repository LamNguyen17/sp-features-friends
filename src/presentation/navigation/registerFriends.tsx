import React from 'react'
import type {FriendsDeps} from "presentation/types/injection";
import {FriendsScreen} from "presentation/screens/FriendsScreen";

export const registerFriends = (Stack: any, deps: FriendsDeps) => {
    return (
        <Stack.Screen name="Friends">
            {(props: any) => <FriendsScreen {...props} deps={deps}/>}
        </Stack.Screen>
    )
}
