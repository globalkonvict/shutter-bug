/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/PageContainer';
import UserCard from 'components/UsersCard';
import {
  getBaseData,
  getIsLoading,
  getNormalizedData,
} from 'redux-store/slice/mainSlice';

export default function Users() {
  const { users = [] } = useSelector(getBaseData);
  const { albums = {} } = useSelector(getNormalizedData);

  return (
    <Container>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={{ ...user, albumCount: albums[user.id].length }}
        />
      ))}
    </Container>
  );
}
