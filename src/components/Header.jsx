import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <div id="header-area" className="header-area section">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              {/* Logo */}
              <a className="logo float-start" href="index.html">
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
              </a>

              {/* Mini Cart */}
              <div className="mini-cart float-end">
                <a href="cart.html">
                  <i className="zmdi zmdi-shopping-basket"></i>
                </a>
              </div>

              {/* Main Menu */}
              <div id="main-menu" className="main-menu float-end">
                <nav>
                  <ul>
                    {/* Using Link from react-router-dom for internal navigation */}
                    <li>
                      <Link to="/" >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/fixture">Fixture</Link>
                    </li>
                    <li>
                      <Link to="/point-table">Point Table</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                      <ul>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                      <ul>
                        <li>
                          <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                          <Link to="/product-details">Product Details</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
