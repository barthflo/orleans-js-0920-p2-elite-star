import './Header.css'
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import Search from './Search/Search';



// import Favorites from './Favorites/Favorites';




function Header() {
    return (
        <div className="header d-flex justify-content-between align-items-center w-100 p-2">  
            <Logo />
            <Nav />
            <Search />
            {/* <Favorites /> */}
        </div>
    )
}

export default Header;








