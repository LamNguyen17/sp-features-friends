import type { FriendsDeps } from '../types/injection'

export const getFriends = (deps: FriendsDeps) => {
    // return deps.infra.httpClient.request({
    //     method: 'GET',
    //     url: '/friends',
    // })
    return [
        {id: 0, name: 'Forest'},
        {id: 1, name: 'LamNguyen'}
    ];
}
