import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { NavigationController } from '@LamNguyen17/sp-core';
import { useTranslation } from 'react-i18next';

import { useFriends } from '@presentation/hooks/useFriends'

const FriendsScreen = () => {
  const {t} = useTranslation('friends')
  const {friends} = useFriends()
  
  const goToDetail = (friend: any) => {
    // @ts-ignore
    NavigationController.navigate('FriendsDetail', {friend})
  }
  
  return (
    <View>
      <Text>{t('friends')}</Text>
      {friends?.map((f: any) => (
        <Pressable key={f.id} onPress={() => goToDetail(f)}>
          <Text>{f.name}</Text>
        </Pressable>
      ))}
    </View>
  )
}
export default FriendsScreen;
