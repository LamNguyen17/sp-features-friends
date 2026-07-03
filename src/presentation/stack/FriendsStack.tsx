import { FeatureRegistry } from '@LamNguyen17/sp-core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FriendDetailScreen from 'presentation/screens/FriendDetailScreen';
import FriendsScreen from 'presentation/screens/FriendsScreen';
import { friendPlugin } from '@presentation/plugin';

const Stack = createNativeStackNavigator()
export default function FriendsStack() {
  console.log('[FriendsStack] component rendering...')
  return (
    <Stack.Navigator initialRouteName="Friends">
      <Stack.Screen name="Friends" component={FriendsScreen}/>
      <Stack.Screen name="FriendsDetail" component={FriendDetailScreen}/>
    </Stack.Navigator>
  )
}

console.log('[FriendsStack] registering plugin...')
FeatureRegistry.register(friendPlugin)
console.log('[FriendsStack] done')

