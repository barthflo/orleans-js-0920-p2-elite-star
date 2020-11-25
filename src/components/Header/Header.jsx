import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import Favourites from './Favourites/Favourites';
import BackToTop from '../Backtotop/BackToTop';
import './Header.css';
import {useLayoutEffect, useState} from 'react';



const Header = () =>{
  const useWindowSize = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateSize = () =>setSize(window.innerWidth);
    window.addEventListener('resize', updateSize);
    updateSize();
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }, []);
    return size;
  }
  return (
    <div className="header px-4 py-md-0 w-100 bg-dark d-flex justify-content-between align-items-center">
      <Logo useWindowSize = {useWindowSize}/>
      <Nav useWindowSize={useWindowSize}/>
      <SearchBar />
      <Favourites />
      <BackToTop />
      
    </div>
  );
};

export default Header;
