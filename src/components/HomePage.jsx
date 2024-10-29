import React ,{ useEffect} from 'react';
import HeroPage from './HeroPage';

// HomePage Component
const HomePage = () => {
  useEffect(() => {
    document.title = 'Rangers App'
}, 
[])
  return (    
      <HeroPage/>
  );
};

export default HomePage;
