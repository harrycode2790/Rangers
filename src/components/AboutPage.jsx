import React ,{useEffect} from 'react'



const AboutPage = () => {
  
    useEffect(() => {
        document.title = 'About - Rangers App'
    }, 
    [])
  return (
    <>
      
      {/* Page Banner */}
      <section id="page-banner-area" className="page-banner-area section">
        <div className="container">
          <div className="row">
            <div className="page-banner-title text-center col-12">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Area */}
      <section id="about-area" className="about-area section pb-120 pt-120">
        <div className="container">
          <div className="row flex-column flex-lg-row-reverse">
            <div className="about-image col-lg-5 col-12">
              <img src="img/about/2.jpg" alt="About" />
            </div>
            <div className="about-content about-content-2 col-lg-7 col-12">
              <h2>About Team</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
              <ol>
                <li>Maecenas laoreet enim sit amet turpis efficitur varius.</li>
                <li>Morbi eu eros sed nulla convallis rutrum ut eget mi.</li>
                <li>Nullam tempor nisl non lectus molestie ornare.</li>
                <li>Nulla a metus ut nulla eleifend suscipit a eget elit.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Area */}
      <section id="achievement-area" className="achievement-area section overlay pb-120 pt-120">
        <div className="container">
          <div className="section-title title-white text-center col-12 mb-70">
            <h1>Team Achievement</h1>
          </div>
          <div className="achievement-timeline">
            {[
              { year: '2002', title: 'Intercontinental Cup' },
              { year: '2005', title: 'Champions League Winner' },
              { year: '2006', title: 'Spanish Football Champions' },
              { year: '2010', title: 'Champions League Winner' }
            ].map((item, index) => (
              <div key={index} className="single-timeline">
                <span className="date"><span>{item.year}</span></span>
                <div className="content fix">
                  <h4>{item.title}</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Area */}
      <section id="testimonial-area" className="testimonial-area section pb-105 pt-120">
        <div className="container">
          <div className="section-title text-center col-12 mb-70">
            <h1>People Love Us</h1>
          </div>
          <div className="testimonial-slider text-center">
            {[1, 2].map((num) => (
              <div key={num} className="single-testimonial">
                <img src={`img/testimonial/${num}.jpg`} alt="Testimonial" />
                <h4>Johnny Jones</h4>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funfact Area */}
      <section className="funfact-area section overlay pb-60 pt-90">
        <div className="container">
          <div className="row">
            {[
              { count: 2000, label: 'Goals' },
              { count: 180, label: 'Active Players' },
              { count: 580, label: 'Wins' },
              { count: 190, label: 'Awards' }
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 col-12 text-center text-lg-end mb-30">
                <div className="single-funfact">
                  <h1 className="counter">{item.count}</h1>
                  <h3>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Area */}
      <section id="blog-area" className="blog-area section pb-90 pt-120">
        <div className="container">
          <div className="section-title text-center col-12 mb-70">
            <h1>Latest Post</h1>
          </div>
          <div className="row">
            {[1, 2, 3].map((num) => (
              <div key={num} className="blog-item col-lg-4 col-md-6 col-12 mb-30">
                <div className="image"><img src={`img/blog/${num}.jpg`} alt="Blog Post" /></div>
                <div className="content">
                  <div className="meta">
                    <p className="date">10 JUN 2016</p>
                    <p className="cat"><a href="#">Cricket</a></p>
                    <p className="author">BY <a href="#">Admin</a></p>
                  </div>
                  <h3 className="title"><a href="#">Sample Blog Title</a></h3>
                  <p>Gabriel Jesus rescues Man City, Romelu Lukaku continues his remarkable form...</p>
                  <a href="#" className="read-more">READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
    </>
  )
}

export default AboutPage
