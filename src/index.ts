// export { default } from './presentation/navigation/FriendsNavigator'
export * from './presentation/navigation/registerFriends'
export * from './presentation/store/friendsSlice'
export * from './presentation/i18n/translations'
export * from './presentation/types/injection'
export * from './presentation/routes/routes'

export const loadFriendsNavigator = async () => {
    const mod = await import(
        /* webpackChunkName: "sp-features-friends" */
        './presentation/navigation/FriendsNavigator'
        );

    return mod.default;
};
