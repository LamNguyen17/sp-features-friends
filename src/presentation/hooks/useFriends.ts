import {useEffect} from 'react';
import type {FriendsDeps} from "../types/injection";
import {setFriends} from "../store/friendsSlice";
import {FriendsRepositoryImpl} from "../../data/repositories/FriendsRepositoryImpl";

export const useFriends = (deps: FriendsDeps) => {
    const repository = new FriendsRepositoryImpl(deps.infra.httpClient);
    const friends = deps.useSelector
        ? deps.useSelector((s: any) => {
            return s.friends.list;
        })
        : []
    useEffect(() => {
        const load = async () => {
            const data = await repository.getFriends()
            deps.dispatch?.(setFriends(data))
        }
        load()
    }, [])

    return { friends }
}
