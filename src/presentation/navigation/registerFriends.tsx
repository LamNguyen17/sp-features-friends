import React, { Suspense } from 'react'
import type {FriendsDeps} from "presentation/types/injection";
import {FriendsScreen} from "presentation/screens/FriendsScreen";
import {FriendDetailScreen} from "presentation/screens/FriendDetailScreen";

// @ts-ignore
// const FriendsScreen = React.lazy(() => import(
//     /* webpackChunkName: "sp-features-friends" */
//     "../screens/FriendsScreen"))

// const FriendsScreen = React.lazy(() =>
//     /* webpackChunkName: "sp-features-friends" */
//     import('../screens/FriendsScreen').then(module => ({
//         default: module.FriendsScreen,
//     }))
// )

// const FriendsScreen = React.lazy(() =>
//     import('../screens/FriendsScreen').then(m => ({
//         default: m.FriendsScreen,
//     }))
// )

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const registerFriends = (Stack: any, deps: FriendsDeps) => {
    // return (
    //     <Stack.Screen name="Friends">
    //         {(props: any) => (
    //             <FriendsScreen {...props} deps={deps} />
    //         )}
    //         {/*{(props: any) => (*/}
    //         {/*    <Suspense fallback={null}>*/}
    //         {/*        <FriendsScreen {...props} deps={deps} />*/}
    //         {/*    </Suspense>*/}
    //         {/*)}*/}
    //     </Stack.Screen>
    // )

    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends">
                {(props: any) => <FriendsScreen {...props} deps={deps} />}
            </Stack.Screen>
            <Stack.Screen name="FriendDetail">
                {(props: any) => <FriendDetailScreen {...props} deps={deps} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
