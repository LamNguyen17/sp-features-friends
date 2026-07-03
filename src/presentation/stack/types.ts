export const FriendsRoutes = {
  Friends: 'Friends',
  FriendsDetail: 'FriendsDetail',
} as const

export type FriendsStackParamList = {
  [FriendsRoutes.Friends]: undefined
  [FriendsRoutes.FriendsDetail]: { data: any }
}
