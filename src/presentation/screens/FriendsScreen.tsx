import React from 'react'
import {View, Text, Pressable, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import {useFriends} from '../hooks/useFriends'
import type {FriendsDeps} from "../types/injection";

export const FriendsScreen = ({navigation,deps}: { navigation: any, deps: FriendsDeps }) => {
    const {friends} = useFriends(deps)
    const t = deps.t || ((k: string) => k)

    const goToDetail = (friend: any) => {
        navigation.navigate('FriendDetail', {
            friend,
        })
    }

    return (
        <View>
            <Text>{t('friends.title')}</Text>
            {friends.map((f: any) => (
                <Pressable key={f.id} onPress={() => goToDetail(f)}>
                    <Text>{f.name}</Text>
                </Pressable>
            ))}
        </View>
    )
}
