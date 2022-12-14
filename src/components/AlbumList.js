import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AlbumList({ album, user, photosCount }) {
  return (
    <List>
      <AlbumLink to={`/albums/${album.id}`}>
        <ListItem>
          <ListItemTitle>{album.title}</ListItemTitle>
          <ListItemSubtitle>PhotoGrapher: {user.name}</ListItemSubtitle>
          <ListItemSubtitle>Photos: {photosCount}</ListItemSubtitle>
        </ListItem>
      </AlbumLink>
    </List>
  );
}

const List = styled.div`
  max-width: 700px;
  width: 100%;
  border: 1px solid #000;
  margin: 10px;
  background-color: #fffedd;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const ListItemTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #0d6efd;
  text-align: center;
  text-transform: capitalize;
  margin: 10px;
  padding: 10px;
`;

const ListItemSubtitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #0d6efd;
  text-align: center;
  text-transform: capitalize;
  margin: 10px;
  padding: 10px;
`;

const AlbumLink = styled(Link)`
  text-decoration: none;
`;
