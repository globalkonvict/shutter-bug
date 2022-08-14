import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getIsLoading, saveFetchedData } from 'redux-store/slice/mainSlice';
import networkErrorHandler from 'utils/network-error-handler';
import pages from 'pages';
import Layout from 'layouts';
import apiCalls from 'api';
import 'App.css';
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * Error handling for network errors.
 */
networkErrorHandler();

const { Home, Users, Albums, About, User, Album } = pages;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const fetchAsyncData = useCallback(async () => {
    try {
      const data = await apiCalls.callAllApi();
      dispatch(saveFetchedData(data));
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAsyncData();
  }, [fetchAsyncData]);

  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="images" element={!isLoading ? <Home /> : null} />
        <Route path="images/:page" element={!isLoading ? <Home /> : null} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<User />} />
        <Route path="albums" element={!isLoading ? <Albums /> : null} />
        <Route path="albums/:id" element={!isLoading ? <Album /> : null} />
        <Route
          path="albums/:id/:page"
          element={!isLoading ? <Album /> : null}
        />
        <Route path="albums/:page" element={!isLoading ? <Albums /> : null} />
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
