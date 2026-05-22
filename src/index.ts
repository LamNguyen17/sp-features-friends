export const friends = {
    navigator: () =>
        import(
            /* webpackChunkName: "sp-features-friends" */
            './presentation/navigation/FriendsNavigator'
            ),
};

export const loadFriendsNavigator = () =>
  import(
    /* webpackChunkName: "sp-features-friends" */
    './presentation/navigation/FriendsNavigator'
    );
// types OK
export * from './presentation/types/injection';
export * from './presentation/store/friendsSlice'
export * from './presentation/i18n/translations'
export * from './presentation/routes/routes'
