import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { FriendsRepositoryImpl } from 'data/repositories/FriendsRepositoryImpl';
import { setFriends } from 'presentation/redux/friendsSlice';

const repository = new FriendsRepositoryImpl();
export const useFriends = () => {
  const dispatch = useDispatch();
  const [friends, setFriend] = useState([]);
  
  useEffect(() => {
    const load = async () => {
      const data = await repository.getFriends()
      setFriend(data)
      dispatch(setFriends(data))
    }
    load()
  }, [])
  
  return {friends}
}
