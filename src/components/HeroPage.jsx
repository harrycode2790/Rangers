import React from 'react'

const HeroPage = () => {
  return (
    <div>
         {/* Hero Area */}
      <div id="hero-area" className="hero-area section">
        <div className="hero-slider">
        {/* Hero Item 2 */}
            <div className="hero-item">
            <img src={`${process.env.PUBLIC_URL}/img/hero/2.jpg`} alt="Hero 2" />
            <div className="container">
              <div className="row">
              <div className="font-extrabold text-white col-lg-10 col-12">
                <h2 className="text-7xl text-white md:text-6xl font-extrabold mb-4">
                    Best team, one dream
                </h2>
                <p className="text-xl md:text-xl text-yellow-400">
                United by passion, driven by purpose. Our team trains hard, plays harder, and never stops until
                we achieve victory together!
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


          
    </div>
  )
}

export default HeroPage
