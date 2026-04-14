import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export const FriendItem = ({
                               name,
                               avatar
                           }: {
    name: string
    avatar?: string
}) => {
    return (
        <View style={styles.container}>
            {avatar && <Image source={{uri: avatar}} style={styles.avatar}/>}
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    name: {
        fontSize: 16
    }
})
