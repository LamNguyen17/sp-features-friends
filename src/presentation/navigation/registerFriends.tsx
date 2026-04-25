import React, { Suspense } from 'react'
import type {FriendsDeps} from "presentation/types/injection";
// import {FriendsScreen} from "presentation/screens/FriendsScreen";

// @ts-ignore
const FriendsScreen = React.lazy(() => import(
    /* webpackChunkName: "sp-features-friends" */
    "../screens/FriendsScreen"))


export const registerFriends = (Stack: any, deps: FriendsDeps) => {
    return (
        <Stack.Screen name="Friends">
            {/*{(props: any) => <FriendsScreen {...props} deps={deps}/>}*/}
            {(props: any) => (
                <Suspense fallback={null}>
                    <FriendsScreen {...props} deps={deps} />
                </Suspense>
            )}
        </Stack.Screen>
    )
}
