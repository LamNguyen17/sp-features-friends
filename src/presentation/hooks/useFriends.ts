import {useEffect} from 'react';
import {FriendsRepositoryImpl} from "data/repositories/FriendsRepositoryImpl";
import {setFriends} from "presentation/store/friendsSlice";
import type {FriendsDeps} from "presentation/types/injection";

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
