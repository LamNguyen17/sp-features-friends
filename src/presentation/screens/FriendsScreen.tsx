import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import {useFriends} from '../hooks/useFriends'
import type {FriendsDeps} from "../types/injection";

export const FriendsScreen = ({deps}: { deps: FriendsDeps }) => {
    const {friends} = useFriends(deps)
    const t = deps.t || ((k: string) => k)

    return (
        <View>
            <Text>{t('friends.title')}</Text>

            {friends.map((f: any) => (
                <Text key={f.id}>{f.name}</Text>
            ))}
        </View>
    )
}
