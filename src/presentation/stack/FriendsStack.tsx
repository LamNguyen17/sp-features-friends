import { FeatureRegistry } from '@LamNguyen17/sp-core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FriendDetailScreen from 'presentation/screens/FriendDetailScreen';
import FriendsScreen from 'presentation/screens/FriendsScreen';
import { friendPlugin } from '@presentation/plugin';
import { FriendsRoutes } from '@presentation/stack/types';

const Stack = createNativeStackNavigator()
export default function FriendsStack() {
  console.log('[FriendsStack] component rendering...')
  return (
    <Stack.Navigator initialRouteName={FriendsRoutes.Friends}>
      <Stack.Screen name={FriendsRoutes.Friends} component={FriendsScreen}/>
      <Stack.Screen name={FriendsRoutes.FriendsDetail} component={FriendDetailScreen}/>
    </Stack.Navigator>
  )
}

console.log('[FriendsStack] registering plugin...')
FeatureRegistry.register(friendPlugin)
console.log('[FriendsStack] done')

