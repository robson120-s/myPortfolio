// Nav.js
import React from 'react';
import logo from './img/logo.svg';
import search from './img/search2.svg';
import cart from './img/cart.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'; 

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg nav px-4 position-sticky">
      <ul className="navbar-nav w-100 d-flex align-items-center justify-content-between">
        <li className="nav-item">
          <img src={logo} alt="logo" className="logo mob" />
        </li>

        <li className="nmobnav-item position-static hover-dropdown">
          <a className="nav-link" href=" ">Store</a>
          <div className="dropdown-menu w-100 shadow p-4 mega-dropdown">
            <div className="row">
              <div className="col-md-3 navdrop">
                <h6 className="item">Shop</h6>
                < h4><a className="dropdown-item fw-bold" href=" ">Shop the Latest</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Mac</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">ipad </a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Apple Watch</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Apple Vision Pro</a></ h4>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">Quick Links</h6>
                <a className="dropdown-item fw-bold" href=" ">Find a Store</a>
                <a className="dropdown-item fw-bold" href=" ">Order Status</a>
                <a className="dropdown-item fw-bold" href=" ">Apple Trade In</a>
                <a className="dropdown-item fw-bold" href=" ">Financing</a>
                <a className="dropdown-item fw-bold" href=" ">Personal Setup</a>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">Shop Special Stores</h6>
                <a className="dropdown-item fw-bold" href=" ">Certified Refurbished</a>
                <a className="dropdown-item fw-bold" href=" ">Education+</a>
                <a className="dropdown-item fw-bold" href=" ">Business </a>
                <a className="dropdown-item fw-bold" href=" ">Government</a>
              </div>
            </div>
          </div>
        
        </li>

        
        <li className="nmob nav-item dropdown position-static hover-dropdown">
          <a className="nav-link" href=" ">Mac</a>
          <div className="dropdown-menu w-100 shadow p-4 mega-dropdown">
            <div className="row">
              <div className="col-md-3 navdrop">
                <h6 className="dropdown-item">Explore Mac</h6>
                < h4><a className="dropdown-item fw-bold" href=" ">Explore All Mac</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">MacBook Air</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">MacBook Pro</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iMac</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Mac mini</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Mac Studio</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Mac Pro</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Displays</a></ h4>
                < h6><a className=" dropdown-item" href=" ">Compare Mac</a></ h6>
                < h6><a className="dropdown-item " href=" ">Switch from Pc to Mac</a></ h6>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">Shop Mac</h6>
                <a className="dropdown-item fw-bold" href=" ">Shop Mac</a>
                <a className="dropdown-item fw-bold" href=" ">Mac Accessories</a>
                <a className="dropdown-item fw-bold" href=" ">Apple Trade In</a>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">More from Mac</h6>
                <a className="dropdown-item fw-bold" href=" ">Mac Support</a>
                <a className="dropdown-item fw-bold" href=" ">AppleCare+</a>
                <a className="dropdown-item fw-bold" href=" ">macOS Preview</a>
              </div>
            </div>
          </div>
        </li>
        
        <li className="nmob nav-item dropdown position-static hover-dropdown">
          <a className="nav-link" href=" ">iPad</a>
            <div className="dropdown-menu w-100 shadow p-4 mega-dropdown">
            <div className="row">
              <div className="col-md-3 navdrop">
                <h6 className="dropdown-item">Explore iPad</h6>
                < h4><a className="dropdown-item fw-bold" href=" ">Explore All iPad</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPad Air</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPad Pro</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPad</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPad mini</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Apple Pencil</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">Keyboards</a></ h4>
                < h6><a className=" dropdown-item" href=" ">Compare iPad</a></ h6>
                < h6><a className="dropdown-item " href=" ">why iPad</a></ h6>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">Shop iPad</h6>
                <a className="dropdown-item fw-bold" href=" ">Shop iPad</a>
                <a className="dropdown-item fw-bold" href=" ">iPad Accessories</a>
                <a className="dropdown-item fw-bold" href=" ">Apple Trade In</a>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">More from iPad</h6>
                <a className="dropdown-item fw-bold" href=" ">iPad Support</a>
                <a className="dropdown-item fw-bold" href=" ">AppleCare+ for iPad</a>
                <a className="dropdown-item fw-bold" href=" ">macOS Preview</a>
                <a className="dropdown-item fw-bold" href=" ">iCloud+</a>
                <a className="dropdown-item fw-bold" href=" ">Education</a>
              </div>
            </div>
          </div>
          </li>

        <li className="nmob nav-item dropdown  position-static hover-dropdown">
          <a className="nav-link " href=" ">iPhone</a>
          <div className="dropdown-menu w-100 shadow p-4 mega-dropdown">
            <div className="row">
              <div className="col-md-3 navdrop">
                <h6 className="dropdown-item">Explore iPhone</h6>
                < h4><a className="dropdown-item fw-bold" href=" ">Explore All iPhone</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone Air</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone 16 Pro</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone 16</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone 16e</a></ h4>
                < h4><a className="dropdown-item fw-bold" href=" ">iPhone 15</a></ h4>
                < h6><a className=" dropdown-item" href=" ">Compare iPhone</a></ h6>
                < h6><a className="dropdown-item " href=" ">Switch from Android</a></ h6>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">Shop iPhone</h6>
                <a className="dropdown-item fw-bold" href=" ">Shop iPhone</a>
                <a className="dropdown-item fw-bold" href=" ">iPhone Accessories</a>
                <a className="dropdown-item fw-bold" href=" ">Apple Trade In</a>
              </div>
              <div className="col-md-3">
                <h6 className="text-muted">More from iPhone</h6>
                <a className="dropdown-item fw-bold" href=" ">iPhone Support</a>
                <a className="dropdown-item fw-bold" href=" ">AppleCare+ for iPhone</a>
                <a className="dropdown-item fw-bold" href=" ">ios 26 Preview</a>
                <a className="dropdown-item fw-bold" href=" ">Apple Intelligence</a>
                <a className="dropdown-item fw-bold" href=" ">App by Apple</a>
                <a className="dropdown-item fw-bold" href=" ">Siri</a>
                <a className="dropdown-item fw-bold" href=" ">icloud+</a>
              </div>
            </div>
          </div>
          </li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">Watch</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">Vision</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">AirPods</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">TV & Home</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">Entertainment</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">Accessories</a></li>
        <li className="nav-item nmob"><a className="nav-link" href=" ">Support</a></li>

        <li className="nav-item"><img src={search} alt="search" className="mob logo" /></li>
        <li className="nav-item"><img src={cart} alt="cart" className="mob logo" /></li>
      </ul>
    </nav>
  );
}

export default Nav;
