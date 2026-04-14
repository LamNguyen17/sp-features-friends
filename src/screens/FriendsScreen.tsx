import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useFriends } from '../hooks/useFriends'
import { FriendsList } from '../components/FriendsList'

type Props = {
    fetchFriends?: () => Promise<any[]>
}

export const FriendsScreen = ({ fetchFriends }: Props) => {
    const { friends, loading } = useFriends(fetchFriends)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friends</Text>

            {loading ? (
                <ActivityIndicator />
            ) : (
                <FriendsList data={friends} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16
    }
})
