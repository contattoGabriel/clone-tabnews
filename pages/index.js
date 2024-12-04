function Home() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriel Portfólio</title>
        <link href="assets/img/favicon-32x32.png" rel="icon" />
        <link href="assets/css/main.css" rel="stylesheet" />
        {/* Inclua outras dependências se necessário */}
      </head>
      <body className="index-page">
        <header
          id="header"
          className="header d-flex flex-column justify-content-center"
        >
          <i className="header-toggle d-xl-none bi bi-list"></i>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  <i className="bi bi-house navicon"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#Sobre">
                  <i className="bi bi-person navicon"></i>
                  <span>Sobre</span>
                </a>
              </li>
              <li>
                <a href="#Curriculo">
                  <i className="bi bi-file-earmark-text navicon"></i>
                  <span>Curriculo</span>
                </a>
              </li>
              <li>
                <a href="#Contato">
                  <i className="bi bi-envelope navicon"></i>
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <section id="hero" className="hero section light-background">
            <img src="assets/img/gabriel-hero.jpg" alt="" />
            <div className="container" data-aos="zoom-out">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2>Gabriel Borges</h2>
                  <p>
                    I'm a{" "}
                    <span className="typed" data-typed-items="Developer,">
                      Developer
                    </span>
                  </p>
                  <div className="social-links">
                    <a
                      href="https://github.com/contattoGabriel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/gabriel.borges8/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gabrielborgesdev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Outras seções seguem aqui */}
        </main>
        <footer className="footer position-relative light-background">
          <div className="container">
            <h3 className="sitename">Gabriel Borges</h3>
            <div className="social-links d-flex justify-content-center">
              <a
                href="https://github.com/contattoGabriel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.instagram.com/gabriel.borges8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielborgesdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Home;
