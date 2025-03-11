import Profile from '../assets/images/harry_profile.png';

const Apropos = () => {
  return (
    <section className="section" id="apropos">
        <div className="container">
            <div className="header-content">
                <div className="text-container">
                    <h1>A Propos de moi</h1>
                    <p>
                        Passionné de sciences : mathématiques, physique et chimie. J'ai décidé de 
                        faire un parcours scientifique et d'aller en classes prépas puis en école 
                        d'ingénieur. Issue de deux école : Télécom ParisTech et ISEP (Institut Supérieur d'
                        Electronique de Paris). Donc je sors de là avec un double diplôme.
                    </p>
                    <button className="common-btn">Voir Plus</button>
                </div>
                <div className="image-container">
                    <img src={Profile} alt="Harry Profile" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Apropos