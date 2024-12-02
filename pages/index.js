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
            <strong>SIRIUS GROUP</strong> - Desenvolvedor Full Stack Júnior
            (Maio 2024 - Agosto 2024)
            <ul>
              <li>
                Desenvolvi e mantive aplicações web utilizando Angular com
                TypeScript, integradas a bancos de dados MySQL.
              </li>
              <li>
                Colaborei na análise e documentação de requisitos técnicos e
                funcionais para novos projetos e funcionalidades.
              </li>
              <li>
                Participei do ciclo completo de desenvolvimento de software,
                incluindo construção de interfaces responsivas, implementação de
                lógica de negócios e integração com APIs RESTful.
              </li>
              <li>
                Realizei otimizações em consultas SQL, garantindo melhor
                desempenho em aplicações existentes.
              </li>
              <li>
                Trabalhei em equipe utilizando metodologias ágeis, como Scrum,
                para entrega contínua de valor.
              </li>
            </ul>
          </li>
          <li>
            <strong>LICITAR DIGITAL</strong> - Assistente de Tecnologia I
            (Setembro 2024 - Novembro 2024)
            <ul>
              <li>
                Desenvolvi habilidades avançadas em MySQL, atuando na resolução
                de tickets e na análise de problemas relacionados à plataforma
                da empresa.
              </li>
              <li>
                Identifiquei e solucionei empecilhos técnicos, contribuindo para
                a melhoria da experiência dos usuários e para a estabilidade do
                sistema.
              </li>
              <li>
                Aprofundei conhecimentos em NestJS, auxiliando na manutenção e
                desenvolvimento de serviços backend escaláveis.
              </li>
              <li>
                Colaborei com equipes multidisciplinares para entender as
                necessidades do cliente e implementar soluções alinhadas aos
                objetivos do negócio.
              </li>
            </ul>
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
