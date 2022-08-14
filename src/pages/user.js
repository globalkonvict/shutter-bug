import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AlbumList from 'components/AlbumList';
import Container from 'components/PageContainer';
import { getNormalizedData } from 'redux-store/slice/mainSlice';

export default function User() {
  const { id } = useParams();
  const { albums, users, photos } = useSelector(getNormalizedData);
  return (
    <Container>
      <div>
        <h1>{users[id].name}&apos; s Albums</h1>
        {albums[id].map((album) => (
          <AlbumList
            key={album.id}
            album={album}
            user={users[album.userId]}
            photosCount={photos[album.id].length}
          />
        ))}
      </div>
    </Container>
  );
}
