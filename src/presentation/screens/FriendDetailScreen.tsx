import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const FriendDetailScreen = () => {
  const {t} = useTranslation('friends')
  const route: any = useRoute();
  const {friend} = route.params
  
  return (
    <View>
      <Text>{t('friends')}</Text>
      <Text>{friend.name}</Text>
    </View>
  )
}

export default FriendDetailScreen;
