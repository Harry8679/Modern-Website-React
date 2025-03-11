import Logo from '../assets/images/bird.jpg';
import '../assets/css/styles.css';

const Header = () => {
  return (
    <div className="top-bar">
        <img src={Logo} className="logo" alt='Logo' />
         <div className="menu-burger" id="menuToggle">
            <i className="fa-solid fa-bars"></i>
         </div>
    </div>
  )
}
export default Header;