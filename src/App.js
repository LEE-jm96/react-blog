import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return(
    <>
      <Helmet>
        <title>MinLog</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
    // <Routes>
    //   <Route path="/" element={<PostListPage/>} />
    //   <Route path="/@:username" element={<PostListPage/>} />
    //   <Route path="/login" element={<LoginPage/>} />
    //   <Route path="/register" element={<RegisterPage/>} />
    //   <Route path="/write" element={<WritePage/>} />
    //   <Route path="/@:username/:postId" element={<PostPage/>} />
    // </Routes>
  );
};

export default App;
