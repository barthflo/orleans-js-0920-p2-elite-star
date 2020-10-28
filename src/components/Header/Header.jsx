import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import Favourites from './Favourites/Favourites';
import './Header.css';

const Header = () =>{
  return (
    <div className="header p-3 w-100 bg-dark d-flex justify-content-around align-items-center">
      <Logo />
      <Nav />
      <SearchBar />
      <Favourites />
    </div>
  );
};

export default Header;