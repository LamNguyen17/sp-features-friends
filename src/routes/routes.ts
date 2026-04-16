export const FriendsRoutes = {
    Friends: 'Friends',
    FriendDetail: 'FriendDetail',
} as const

export type FriendsStackParamList = {
    [FriendsRoutes.Friends]: undefined
    [FriendsRoutes.FriendDetail]: { id: string }
}
