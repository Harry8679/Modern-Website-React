import Idea from '../assets/images/idea.jpg';
import Brain from '../assets/images/brain.jpg';
import Rocket from '../assets/images/rocket.jpg';

const Caracteristiques = () => {
  const caracteristiquesData = [
    {
        image: Idea,
        titre: 'Se former',
        description: 'Notre but est de vous former à coder ou sur l\'apprentissage de la programmation sur toutes les platformes disponibles sur le marché : ordinateur, téléphones et tablettes.'
    },
    {
        image: Brain,
        titre: 'Professeurs experts',
        description: "Nos professeurs sont des expert de classe mondiale. Ils sont capables d'enseigner dans plusieurs langues. Et ce sont les meilleurs au kilomètres carré."
    },
    {
        image: Rocket,
        titre: 'Accès illimité',
        description: 'Ne cherhez plus de raison pour ne pas vous former, de passer son temps à scroller sans apprendre et tout dans le divertissement. Un bon entendeur s\'aligne.'
    }
  ];
  return (
    <section className="section" id="caracteristique">
        <h1 className="section-title">Caractéristique</h1>

        <div className="features-container">
            {caracteristiquesData.map((caract, index) => {
                return (
                    <div key={index} className="feature-box">
                        <img src={caract.image} alt="Idée" />
                        <h3>{caract.titre}</h3>
                        <p>{caract.description}</p>
                    </div>
                )
            })}
        </div>
        <div className="feature-btn">
            <button className="common-btn">Essayez gratuitement</button>
        </div>
    </section>
  )
}
export default Caracteristiques;