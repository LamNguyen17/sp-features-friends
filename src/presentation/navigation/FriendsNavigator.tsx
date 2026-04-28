import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {FriendDetailScreen} from "presentation/screens/FriendDetailScreen";
import {FriendsScreen} from "presentation/screens/FriendsScreen";

const Stack = createNativeStackNavigator()
export default function FriendsNavigator({ deps }: any) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends">
                {(props: any) => <FriendsScreen {...props} deps={deps} />}
            </Stack.Screen>

            <Stack.Screen name="FriendDetail">
                {(props: any) => <FriendDetailScreen {...props} deps={deps} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
