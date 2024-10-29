import{BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import HomePage from "./components/HomePage";
import AboutPage from './components/AboutPage';


function App() {
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
