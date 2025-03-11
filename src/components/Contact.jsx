const Contact = () => {
  return (
    <section className="section" id="contact">
        <div className="container">
            <div className="contact-content">
                <h1>Inscris-toi pour rejoindre notre communauté</h1>

                <form action="">
                    <div className="input-group">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder="Entrez votre nom complet" />
                    </div>

                    <div className="input-group">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Entrez votre email" />
                    </div>

                    <div className="input-group">
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Entrez votre mot de passe" />
                    </div>

                    <button className="common-btn">Inscription</button>
                </form>
            </div>
        </div>
    </section>
  )
}
export default Contact