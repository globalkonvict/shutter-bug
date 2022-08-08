import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import AlbumList from 'components/AlbumList';
import Container from 'components/PageContainer';
import {
  getBaseData,
  getIsLoading,
  getNormalizedData,
} from 'redux-store/slice/mainSlice';

export default function Albums() {
  const navigate = useNavigate();
  const { page = 0 } = useParams();
  const [itemsPerPage] = useState(24);
  const isLoading = useSelector(getIsLoading);
  const { users } = useSelector(getNormalizedData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { albums = [] } = useSelector(getBaseData);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(albums.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(albums.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, albums]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % albums.length;
    setItemOffset(newOffset);
    navigate(event.selected ? `${event.selected + 1}` : `/albums`);
  };

  return (
    <>
      <Container>
        {isLoading ? <Loader /> : null}
        {currentItems.map((album) => (
          <AlbumList key={album.id} album={album} user={users[album.userId]} />
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
