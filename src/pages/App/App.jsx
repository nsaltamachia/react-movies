
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data';
import '../../components/NavBar/NavBar.css';



export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/movies" element={<MoviesListPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />         
          </Routes>
        </>
        :
        <LoginPage onLogin={handleLogin} />
      }
    </main>
  );
}


