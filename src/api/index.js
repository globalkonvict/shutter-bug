import config from 'utils/config';
import axios from './api';

const callUsersAPI = async () => {
  const response = await axios.get(config.USER_API_PREFIX);
  return response.data;
};

const callAlbumsAPI = async () => {
  const response = await axios.get(config.ALBUM_API_PREFIX);
  return response.data;
};

const callPhotosAPI = async () => {
  const response = await axios.get(config.PHOTO_API_PREFIX);
  return response.data;
};

const callAllApi = async () => {
  const apiCalls = [callUsersAPI(), callAlbumsAPI(), callPhotosAPI()];
  const [usersRes, albumRes, photosRes] = await Promise.all(apiCalls);

  const normalizedData = {
    users: {},
    albums: {},
    photos: {},
  };

  usersRes.forEach((user) => {
    normalizedData.users[user.id] = user;
  });

  albumRes.forEach((album) => {
    normalizedData.albums[album.id] = [
      ...(normalizedData.albums[album.id] || []),
      album,
    ];
  });

  photosRes.forEach((photo) => {
    normalizedData.photos[photo.albumId] = [
      ...(normalizedData.photos[photo.albumId] || []),
      photo,
    ];
  });

  return {
    normalizedData,
    apiResponse: { users: usersRes, albums: albumRes, photos: photosRes },
  };
};

export default { callUsersAPI, callAlbumsAPI, callPhotosAPI, callAllApi };
