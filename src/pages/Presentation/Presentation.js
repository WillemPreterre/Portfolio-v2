import "./Presentation.scss";

function Presentation() {
  return (
    <section className="presentation" id="home">

      {/* HERO */}

      <div className="hero">
        <div className="hero-left">
          <h1>
            FULL STACK <br />
            <span>DEVELOPER</span>
          </h1>

          <p>
            Je suis développeur web passionné par la création de sites modernes,
            performants et responsives.
          </p>

          <button>VOIR MES PROJETS</button>
        </div>

        <div className="hero-right">
          <img src="/profile.png" alt="profil" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;