import type { FeaturePlugin, RegistryContext } from '@LamNguyen17/sp-core';

import FriendsStack from '@presentation/stack/FriendsStack'
import { friendsReducer } from '@presentation/redux/friendsSlice'
import vi from './locales/vi.json'
import en from './locales/en.json'

export const friendPlugin: FeaturePlugin = {
  name: 'sp-features-friends',
  register(ctx: RegistryContext) {
    ctx.injectReducer('payment', friendsReducer)
    ctx.registerStack({name: 'FriendsStack', component: FriendsStack})
    ctx.addTranslations('vi', 'friends', vi)
    ctx.addTranslations('en', 'friends', en)
  }
}

console.log('[FRIEND PLUGIN] registering...')
