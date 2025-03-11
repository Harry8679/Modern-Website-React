import { useState } from 'react';
import '../assets/css/styles.css';
import Logo from '../assets/images/bird.jpg';

const Sidebar = () => {
//   console.log('useState', useState(10));
  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'fa-brands fa-facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'fa-brands fa-instagram' },
    { name: 'X', url: 'https://x.com', icon: 'fa-brands fa-twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fa-brands fa-linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com', icon: 'fa-brands fa-youtube' },
  ];

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // setIsOpen(false);
    }
  }
  return (
    <>
        <div className="top-bar">
            <img src={Logo} className="logo" alt='Logo' />
            <div className="menu-burger" id="menuToggle" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <div className="social-sidebar">
            {socialLinks.map(({ url, icon }, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer"><i className={icon}></i></a>
            ))}
        </div>

        <nav className={`sidebar ${isOpen ? 'open': ''}`} id="sidebar">
            <ul>
                <li><a href="#accueil" onClick={(e) => handleScroll(e, "accueil")}>Accueil</a></li>
                <li><a href="#apropos" onClick={(e) => handleScroll(e, "apropos")}>A Propos</a></li>
                <li><a href="#caracteristique" onClick={(e) => handleScroll(e, "caracteristique")}>Caractéristiques</a></li>
                <li><a href="#cours" onClick={(e) => handleScroll(e, "cours")}>Cours</a></li>
                <li><a href="#offre" onClick={(e) => handleScroll(e, "offre")}>Offre</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
            </ul>
        </nav>
    </>
  )
}
export default Sidebar;