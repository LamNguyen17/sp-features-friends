export type FriendsDeps = {
    infra: { httpClient: { request: (config: any) => Promise<any> } }
    dispatch?: any
    useSelector?: any
    t?: (key: string) => string
}
