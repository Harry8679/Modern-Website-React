import Cour from '../assets/images/cours.png';

const Cours = () => {
  return (
    <section className="section" id="cours">
        <div className="container">
            <div className="header-content">
                <div className="image-container">
                    <img src={Cour} alt="Cours" />
                </div>
                <div className="text-container">
                    <h1>Nos cours sont les meilleurs</h1>
                    <p>
                        Nos cours sont parmi les meilleurs du marché et rapport qualité prix, nous sommes 
                        les leaders défiants toute concurrence. Vous avez une période d'éssai, 30 jours et remboursable 
                        dans son intégralité.
                    </p>
                    <button className="common-btn">Voir Plus</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Cours;