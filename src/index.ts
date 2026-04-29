export * from './presentation/routes/routes'
export * from './presentation/types/injection'

export const loadFriendsNavigator = async () => {
    const mod = await import(
        /* webpackChunkName: "sp-features-friends" */
        './presentation/navigation/FriendsNavigator'
        );

    return mod.default;
};
