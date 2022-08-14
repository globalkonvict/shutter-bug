/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import albumImg from 'assets/book.png';
import photographer from 'assets/photographer.png';
import loadingError from 'assets/loading error.gif';

function ImageCard({ img, title, album, user }) {
  const [isLoadingFailed, setIsLoading] = useState(false);
  const handleLoadingError = () => {
    setIsLoading(true);
  };
  return (
    <ImageCardContainer>
      <Image
        src={isLoadingFailed ? loadingError : img}
        onError={handleLoadingError}
        alt="image"
      />
      <Title>{title}</Title>
      <AlbumIcon src={albumImg} alt="album" />
      <AlbumLink to={`/albums/${album.id}`}>{album.title}</AlbumLink>
      <PhotographerIcon src={photographer} alt="photographer" />
      <PhotographerLink to={`/users/${user.id}`}>{user.name}</PhotographerLink>
    </ImageCardContainer>
  );
}

const ImageCardContainer = styled.div`
  width: 300px;
  height: 250px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.4);
  margin: 24px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    transform: scale(1.8);
    transition: 0.5s;
  }
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin: 0;
  padding: 0 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #0d6efd;
`;

const ImageIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
  border: 1px solid white;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const AlbumIcon = styled(ImageIcon)`
  bottom: 60px;
  left: 10px;
`;

const PhotographerIcon = styled(ImageIcon)`
  bottom: 20px;
  left: 10px;
`;

const AlbumLink = styled(Link)`
  position: absolute;
  bottom: 60px;
  left: 50px;
  text-decoration: none;
`;

const PhotographerLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 50px;
  text-decoration: none;
`;

export default ImageCard;
