function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        margin: "20px",
      }}
    >
      <header style={{ marginBottom: "20px" }}>
        <h1>Gabriel Vitor Borges de Souza</h1>
        <p>
          Sete Lagoas, MG | <a href="tel:+5531999407159">(31) 99940-7159</a> |{" "}
          <a href="mailto:contattogabriel1@gmail.com">
            contattogabriel1@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/gabrielborgesdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/contattoGabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </header>

      <section>
        <h2>Sobre Mim</h2>
        <p>
          Sou estudante de Sistemas de Informação na PUC-MG e iniciei minha
          trajetória na programação em agosto de 2023. Conquistei minha primeira
          oportunidade na área em maio de 2024 e, desde então, venho aprimorando
          minhas habilidades diariamente, resolvendo desafios do cotidiano.
          Atualmente, estou em busca de novas oportunidades para continuar meu
          desenvolvimento profissional e contribuir com minhas competências.
        </p>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Nest.JS</li>
          <li>React</li>
        </ul>
      </section>

      <section>
        <h2>Experiência Profissional</h2>
        <ul>
          <li>
            <strong>SIRIUS GROUP</strong> - Desenvolvedor Full Stack Junior
            (maio 2024 – agosto 2024)
          </li>
          <li>
            <strong>LICITAR DIGITAL</strong> - Assistente de Tecnologia I
            (setembro 2024 – novembro 2024)
          </li>
        </ul>
      </section>

      <section>
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Tab-news</strong> | TypeScript, Node.js, React, Next.js,
            TailwindCSS
            <p>
              Projeto desenvolvido como parte do curso.dev do Filipe Deschamps,
              focado em aprendizado prático de desenvolvimento web full stack.
              Desenvolvimento de uma aplicação completa utilizando TypeScript,
              Node.js e React, com integração à API do Next.js para renderização
              server-side e geração de páginas estáticas. Aplicação de práticas
              de desenvolvimento ágil, incluindo versionamento de código e
              revisão de pull requests.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Certificados</h2>
        <ul>
          <li>Curso.Dev (em andamento)</li>
          <li>Cybersecurity Essentials - Cisco</li>
          <li>Hacker Ético (BSEC) - Instituto Brasileiro de Cibersegurança</li>
          <li>Banco de Dados (SQL) - Ada Tech</li>
        </ul>
      </section>

      <section>
        <h2>Educação e Idiomas</h2>
        <ul>
          <li>Cursando Sistemas de Informação - PUC-MG (2023 - 2027)</li>
          <li>Inglês Intermediário</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
