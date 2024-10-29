import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <>
     <div className="footer-top-area section pb-70 pt-100">
    <div className="footer-top-left-bg overlay"></div>
        <div className="container">
            <div className="row">
               
                <div className="col-lg-5 col-12 mb-30">
                    <div className="footer-about">
                        <img src="/img/logo.png" alt=""/>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</p>
                        <div className="social fix">
                            <Link to="#"><i className="fa fa-facebook"></i></Link>
                            <Link to="#"><i className="fa fa-rss"></i></Link>
                            <Link to="#"><i className="fa fa-google-plus"></i></Link>
                            <Link to="#"><i className="fa fa-pinterest"></i></Link>
                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-6 col-12 mb-30">
                    <div className="twitter-widget">
                        <h3 className="title">Latest Tweets</h3>
                        <div className="single-twite">
                            <p>Duis aute irure <Link to="#">@dolor</Link> in rderiin voluptate velit esse cillum dolore eu ft nulla pariatur. Excepteur <Link to="#">@sint</Link> occaecat..</p>
                            <span>30 minutes ago</span>
                        </div>
                        <div className="single-twite">
                            <p>Duis aute irure <Link to="#">@dolor</Link> in rderiin voluptate velit esse cillum dolore eu ft </p>
                            <span>15 minutes ago</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-30">
                    <div className="subscribe-widget">
                        <h3 className="title">Newsletters</h3>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="your email address"/>
                                <button className="submit"><i className="zmdi zmdi-mail-send"></i></button>
                            </form>
                        </div>
                        <p><span>Phone:</span> +98 996 554 658</p>
                        <p><span>email:</span> sport@email.com</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
    <div className="footer-bottom-area section">
        <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center">
            
               
                <div className="copyright col-auto">
                    <p>Copyright &copy; <span>Supar Sport</span>. 2021.All right reserved</p>
                </div>
                
                <div className="author-credit col-auto">
                    <p>Created by <Link to="https://hasthemes.com/">Hasthemes</Link> With <i className="fa fa-heart-o"></i></p>
                </div>
                
            </div>
        </div>
    </div>
  </>
  )
}

export default Footer
