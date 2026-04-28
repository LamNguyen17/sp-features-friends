import React from 'react'
import {View, Text} from 'react-native'
import type {FriendsDeps} from "../types/injection"

export const FriendDetailScreen = ({
                                       props,
                                       deps,
                                   }: {
    props: any
    deps: FriendsDeps
}) => {
    const {friend} = props?.route.params
    const t = deps.t || ((k: string) => k)

    return (
        <View>
            <Text>{t('friends.detail')}</Text>
            <Text>{friend.name}</Text>
        </View>
    )
}
