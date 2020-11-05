import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import Favourites from './Favourites/Favourites';
import BackToTop from '../BackToTop/BackToTop';
import './Header.css';

const Header = () =>{
  return (
    <div className="header p-4 w-100 bg-dark d-flex justify-content-between align-items-center">
      <Logo />
      <Nav />
      <SearchBar />
      <Favourites />
      <BackToTop />
      
    </div>
  );
};

export default Header;
