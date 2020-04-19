import React from 'react'
import {Routes, Route, Link } from 'react-router-dom';
import TableUsers from './TableUsers';


function Users() {
    /* All <Route path> and <Link to> values in this
       component will automatically be "mounted" at the
       /users URL prefix since the <Users> element is only
       ever rendered when the URL matches /users/*
    */
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TableUsers/>} />
          <Route path=":id" element={<TableUsers />} />
          <Route path="me" element={<TableUsers />} />
        </Routes>
      </div>
    );
  }

 export default Users; 