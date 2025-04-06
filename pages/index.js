function Resume() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        margin: "20px",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#333",
      }}
    >
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "5px", color: "#2c3e50" }}>
          Gabriel Vitor Borges de Souza
        </h1>
        <div className="contact-info">
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
            </a>{" "}
            |{" "}
            <a
              href="https://contattogabriel.github.io/gabriel-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </p>
        </div>
      </header>

      <section>
        <h2>Objetivo Profissional</h2>
        <p>
          Busco uma posição como Desenvolvedor Backend, aplicando minhas
          habilidades em TypeScript, Node.js e SQL para criar soluções
          escaláveis e eficientes. Interesse em automação, APIs robustas e
          microsserviços.
        </p>
      </section>

      <section>
        <h2>Experiência Profissional</h2>

        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>
            <strong>Head Systems</strong> - Assistente de TI (Janeiro 2025 –
            Presente)
          </p>
          <ul style={{ marginTop: "5px" }}>
            <li>
              Desenvolvi um chatbot integrado à API da OpenAI, automatizando
              processos e reduzindo o tempo de atendimento em 40%.
            </li>
            <li>
              Adaptei a solução para múltiplos clientes, ampliando a eficiência
              operacional.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>
            <strong>Licitar Digital</strong> - Assistente de Tecnologia I
            (Setembro 2024 - Novembro 2024)
          </p>
          <ul style={{ marginTop: "5px" }}>
            <li>
              Resolvi tickets críticos e otimizei a estabilidade do sistema com
              MySQL.
            </li>
            <li>
              Auxiliei no desenvolvimento de serviços backend escaláveis com
              NestJS.
            </li>
            <li>
              Colaborei com equipes multidisciplinares para entender as
              necessidades do cliente.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>
            <strong>SIRIUS GROUP</strong> - Desenvolvedor Backend Júnior (Maio
            2024 - Agosto 2024)
          </p>
          <ul style={{ marginTop: "5px" }}>
            <li>
              Desenvolvi aplicações web com Angular e TypeScript, integradas a
              bancos de dados MySQL.
            </li>
            <li>
              Otimizei consultas SQL, reduzindo o tempo de resposta em 30%.
            </li>
            <li>
              Participei da análise de requisitos e entregas ágeis utilizando
              Scrum.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projetos</h2>
        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>
            <strong>Chatbot Assistente Virtual</strong> | Node.js, Venom-bot,
            OpenAI API
          </p>
          <p>
            Automatizou processos e suporte ao cliente, replicando a solução
            para diversos clientes.
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "5px" }}>
            <strong>Tab-news Clone</strong> | TypeScript, React, Next.js,
            TailwindCSS
          </p>
          <p>
            Recriação do site tabnews.com.br, com foco em aprendizado prático de
            desenvolvimento full stack. Desenvolvimento de uma aplicação
            completa utilizando TypeScript, Node.js e React.
          </p>
        </div>
      </section>

      <section>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>
            <strong>Linguagens:</strong> TypeScript, JavaScript, SQL
          </li>
          <li>
            <strong>Backend:</strong> Node.js, NestJS
          </li>
          <li>
            <strong>Banco de Dados:</strong> MySQL, PostgreSQL
          </li>
          <li>
            <strong>Ferramentas:</strong> Docker, Postman, Git
          </li>
          <li>
            <strong>Metodologias:</strong> Scrum
          </li>
        </ul>
      </section>

      <section>
        <h2>Certificações</h2>
        <ul>
          <li>Cybersecurity Essentials - Cisco</li>
          <li>Hacker Ético (BSEC) - Instituto Brasileiro de Cibersegurança</li>
          <li>Banco de Dados (SQL) - Ada Tech</li>
        </ul>
      </section>

      <section>
        <h2>Educação e Idiomas</h2>
        <ul>
          <li>
            <strong>PUC-MG</strong> - Bacharelado em Sistemas de Informação
            (2024 - 2028)
          </li>
          <li>
            <strong>Idiomas:</strong> Inglês Intermediário
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
