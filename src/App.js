import React from 'react';
import './App.css';
import { Link } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand ml-3">WebDevBlog</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
          ><span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mr-auto mb-2">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Dellivery</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
            </ul>
            <form action="" className="d-flex">
              <input type="search" placeholder="Search" />
              <button className="btn btn-outline-primary ml-3 mr-3">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main>
        <div className="carousel slide" id="carouselControls" data-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/img/1.jpg" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/2.jpg" alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/3.jpg" alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/4.jpg" alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/5.jpg" alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/6.jpg" alt="" />
            </div>
          </div>
          <a href="#carouselControls" className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#carouselControls" className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
