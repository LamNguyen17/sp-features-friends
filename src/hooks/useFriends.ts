import {useEffect, useState} from 'react';
import type {FriendsDeps} from "../types/injection";
import {setFriends} from "../store/friendsSlice";
import {getFriends} from "../api/friendsApi";

export const useFriends = (deps: FriendsDeps) => {
    const friends = deps.useSelector
        ? deps.useSelector((s: any) => s.friends.list)
        : []
    useEffect(() => {
        const load = async () => {
            const data = await getFriends(deps)
            deps.dispatch?.(setFriends(data))
        }
        load()
    }, [])

    return { friends }
}
