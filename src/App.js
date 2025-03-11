import './App.css';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Caracteristiques from './components/Caracteristiques';
import Contact from './components/Contact';
import Cours from './components/Cours';
// import Header from './components/Header';
import Offre from './components/Offre';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <Accueil />
      <Apropos />
      <Caracteristiques />
      <Cours />
      <Offre />
      <Contact />
    </>
  );
}

export default App;
