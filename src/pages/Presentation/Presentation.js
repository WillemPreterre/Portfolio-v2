import "./Presentation.scss";

function Presentation() {
  return (
    <section className="presentation" id="home">

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            FRONTEND <br />
            <span>DEVELOPER</span>
          </h1>

          <p>
            Je suis développeur web passionné par la création de sites modernes,
            performants et responsives.
          </p>

          <button>VOIR MES PROJETS</button>
        </div>

        <div className="hero-right">
          <img src="/images/profile.png" alt="profil" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="services">
        <h2>MY SERVICES</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Website Development</h3>
            <p>
              Création de sites web modernes, rapides et responsive adaptés à vos besoins.
            </p>
          </div>

          <div className="service-card">
            <h3>Web Design</h3>
            <p>
              Design UI/UX moderne avec une expérience utilisateur optimale.
            </p>
          </div>

          <div className="service-card">
            <h3>WordPress Development</h3>
            <p>
              Création et gestion de sites WordPress faciles à maintenir.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Presentation;