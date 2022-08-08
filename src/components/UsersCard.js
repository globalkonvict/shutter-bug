import React from 'react';
import styled from 'styled-components';
import photographer from 'assets/photographer.png';

export default function UsersCard({ user }) {
  return (
    <Card>
      <UserImage src={photographer} alt="user" />
      <UserName>{user.name}</UserName>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </Card>
  );
}

const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  margin: 20px;
  border-radius: 24px;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserName = styled.h1`
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
  color: #0d6efd;
  text-align: center;
  text-transform: capitalize;
`;
