import Offres from '../assets/images/offre.png';

const Offre = () => {
  return (
    <section className="section" id="offre">
        <div className="container">
            <div className="header-content">
                <div className="text-container">
                    <h1>Sans limite d'apprentissage</h1>
                    <p>
                        Venez avec le niveau que vous avez et nous ferons de vous un expert dans le domaine 
                        que vous aurez choisi. Une promotion si vous venez dans le mois en cours.
                    </p>
                    <button className="common-btn">Voir Plus</button>
                </div>
                <div className="image-container">
                    <img src={Offres} alt="Offre Maths" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Offre;