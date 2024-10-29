import useScript from './hooks/useScript';
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import HomePage from "./components/HomePage";
import AboutPage from './components/AboutPage';


function App() {
  useScript(`${process.env.PUBLIC_URL}/js/vendor/jquery-1.12.4.min.js`);
  useScript(`${process.env.PUBLIC_URL}/js/bootstrap.bundle.min.js`);
  useScript(`${process.env.PUBLIC_URL}/js/plugins.js`);
  useScript(`${process.env.PUBLIC_URL}/js/ajax-mail.js`);
  useScript(`${process.env.PUBLIC_URL}/js/main.js`);
 
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/about' element={ <AboutPage/> } />
        </Routes>
      </Layout>
    </Router>
   
  );
}

export default App;
