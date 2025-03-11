import Maths from '../assets/images/maths.png';

const Accueil = () => {
  return (
    <section className="section" id="accueil">
        <div className="container">
            <div className="header-content">
                <div className="image-container">
                    <img src={Maths} alt="Harry Maths" />
                </div>
                <div className="text-container">
                    <h1>
                        Le but final est <br />
                        d'enseigner au monde
                    </h1>
                    <p>
                        Il y a plusieurs manières d'enseigner et le but c'est que ça parle à tout le monde.
                        Et pour cela, il y a plusieurs techniques basée sur la psychologie afin de mieux 
                        comprendre les gens et de trouver la manière optimale d-à chacin d'entre eux d'être 
                        le plus efficace possible.
                    </p>
                    <button className="common-btn">Voir Plus</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Accueil