export const friends = {
    navigator: () =>
        import(
            /* webpackChunkName: "sp-features-friends" */
            './presentation/navigation/FriendsNavigator'
            ),
};
export * from './presentation/types/injection';
export * from './presentation/store/friendsSlice'
export * from './presentation/i18n/translations'
export * from './presentation/routes/routes'
