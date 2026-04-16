import React from 'react'
import { FlatList } from 'react-native'
import {FriendItem} from "presentation/components/FriendItem";

export const FriendsList = ({ data }: { data: any[] }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }: any) => (
                <FriendItem name={item.name} avatar={item.avatar} />
            )}
        />
    )
}
