import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import ImageCard from 'components/ImageCard';
import Container from 'components/PageContainer';

import {
  getIsLoading,
  getNormalizedData,
  getBaseData,
} from 'redux-store/slice/mainSlice';

function Album() {
  const navigate = useNavigate();
  const { page = 0, id } = useParams();
  const [itemsPerPage] = useState(25);
  const isLoading = useSelector(getIsLoading);
  const { albums: albumsBase } = useSelector(getBaseData);
  const { users, photos: photoS } = useSelector(getNormalizedData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const photos = photoS[id];
  const [currentItems, setCurrentItems] = useState([]);
  const currentAlbum = albumsBase.filter((a) => a.id === +id)[0] || {};

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(photos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(photos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, photos]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photos.length;
    setItemOffset(newOffset);
    navigate(
      event.selected ? `/albums/${id}/${event.selected + 1}` : `/albums/${id}`
    );
  };

  return (
    <>
      <Container>
        {isLoading ? <Loader /> : null}
        {currentItems.map((photo) => (
          <ImageCard
            key={photo.id}
            img={photo.url}
            title={photo.title}
            album={currentAlbum}
            user={users[currentAlbum.userId]}
          />
        ))}
      </Container>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          forcePage={page ? page - 1 : 0}
        />
      </div>
    </>
  );
}

export default Album;
