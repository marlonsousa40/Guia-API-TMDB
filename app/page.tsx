export default function Page() {
  return (
    <div className="container">
      <h1>Chave da API do TMDB</h1>

      <p className="description">
        Siga este guia rápido para preparar sua conta do TMDB para acesso à API. Você precisará de uma chave de API para
        permitir que os aplicativos extraiam metadados do TMDB.
      </p>

      {/* Caixa de informação igual à imagem de referência */}
      <div className="callout">
        <div className="callout-title">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          Informação de cadastro
        </div>
        <div className="callout-body">
          Você pode utilizar um e-mail temporário gerado para o cadastro ou o seu próprio e-mail pessoal.
        </div>
      </div>

      <div className="timeline">
        {/* Passo 1 */}
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-title">Gerar um e-mail temporário (Opcional)</div>
          <div className="step-content">
            <p>
              Clique{" "}
              <a href="https://temp-mail.org/en/" target="_blank" rel="noopener noreferrer" className="external-link">
                aqui
              </a>{" "}
              para gerar um endereço de e-mail temporário. Ele será necessário apenas para o cadastro.
            </p>
            <p>
              <strong>Mantenha esta página aberta.</strong> Ou você pode colocar seu próprio e-mail.
            </p>
          </div>
        </div>

        {/* Passo 2 */}
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-title">Criar uma conta</div>
          <div className="step-content">
            <p style={{ marginBottom: "8px" }}>
              <strong>Crie sua conta</strong>
            </p>
            <ol>
              <li>
                Clique{" "}
                <a
                  href="https://www.themoviedb.org/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  aqui
                </a>{" "}
                para abrir a página de cadastro da conta TMDB.
              </li>
              <li>
                Insira um nome de usuário e uma senha, seguidos pelo e-mail temporário gerado na etapa anterior ou seu
                próprio e-mail. Em seguida, clique em <strong>Registrar</strong>.
              </li>
            </ol>
          </div>
        </div>

        {/* Passo 3 */}
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-title">Verifique sua conta</div>
          <div className="step-content">
            <p>
              Volte à aba do e-mail temporário ou no seu e-mail próprio, abra a mensagem do TMDB e clique no link de
              verificação.
            </p>
          </div>
        </div>

        {/* Passo 4 */}
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-title">Crie sua chave de API</div>
          <div className="step-content">
            <ol>
              <li>
                Clique{" "}
                <a
                  href="https://www.themoviedb.org/settings/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  aqui
                </a>{" "}
                para abrir a página da API do TMDB.
              </li>
              <li>
                Clique em <strong>&quot;Solicitar uma chave de API&quot;</strong>.
              </li>
              <li>
                Clique em <strong>YES</strong>.
              </li>
              <li>
                Insira <strong>&ldquo;Stremio Streaming&rdquo;</strong> como Nome do Aplicativo e{" "}
                <strong>&ldquo;https://web.stremio.com&rdquo;</strong> como URL do Aplicativo.
              </li>
              <li>
                No campo <em>&quot;Sobre o Aplicativo&quot;</em>, insira:{" "}
                <em>&quot;Desejo obter metadados do TMDB&quot;</em>.
              </li>
              <li>
                Para as informações de contato, você pode fornecer informações falsas. Por exemplo: um nome aleatório,
                telefone <code>1234561299</code> e endereço <code>42 Duck Lane in Ducktown HI, 08009</code>.
              </li>
              <li>
                Clique em <strong>&quot;Subscribe (Inscrever-se)&quot;</strong>.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="congrats-card">
        <h3>Parabéns! 🎉</h3>
        <p>Sua conta TMDB foi criada e a chave API gerada!</p>
        <p style={{ marginTop: "8px" }}>
          Para acessar sua chave da API a qualquer momento no futuro, visite:{" "}
          <a
            href="https://www.themoviedb.org/settings/api"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            themoviedb.org/settings/api
          </a>
        </p>
        <p style={{ marginTop: "12px", fontWeight: "bold", color: "#e2e8f0" }}>
          Agora é só copiar a chave e ser feliz. 🚀
        </p>
      </div>
    </div>
  )
}
