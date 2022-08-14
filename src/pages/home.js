import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import ImageCard from 'components/ImageCard';
import Container from 'components/PageContainer';
import {
  getBaseData,
  getIsLoading,
  getNormalizedData,
} from 'redux-store/slice/mainSlice';

function Home() {
  const navigate = useNavigate();
  const { page = 0 } = useParams();
  const [itemsPerPage] = useState(25);
  const isLoading = useSelector(getIsLoading);
  const { albums, users } = useSelector(getNormalizedData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { photos = [] } = useSelector(getBaseData);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(photos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(photos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, photos]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photos.length;
    setItemOffset(newOffset);
    navigate(event.selected ? `/images/${event.selected + 1}` : `/images`);
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
            album={albums[photo.albumId][0]}
            user={users[albums[photo.albumId][0].userId]}
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

export default Home;
