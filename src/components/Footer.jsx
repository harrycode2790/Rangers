import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* Footer */}
       <footer className="footer-top-area section pb-70 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 mb-30">
              <img src="img/logo.png" alt="Logo" />
              <p>Details about the organization or footer content.</p>
              <div className="social fix">
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      
      <div className="footer-bottom-area section">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center">
            <div className="col-auto">
              <p>Created by Harry </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
