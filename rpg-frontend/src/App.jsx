import { useState, useEffect } from 'react';
import './App.css';
import Avatar from './Avatar';

function App() {
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:3000/personagem';

  const buscarPersonagem = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPersonagem(data);
    } catch (error) {
      console.error('Erro ao buscar personagem:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPersonagem();
  }, []);

  return (
    <div className="medieval-container">
      <header className="medieval-header">
        <h1 className="title-medieval">⚔️ Pergaminho dos Heróis ⚔️</h1>
        <p className="subtitle-medieval">Forje uma nova lenda para o seu reino</p>
      </header>

      <button onClick={buscarPersonagem} disabled={loading} className="btn-medieval">
        {loading ? 'Consultando os Oráculos...' : '🎲 Invocar Novo Personagem'}
      </button>

      {personagem && (
        <div className="scroll-card">
          <div className="scroll-top"></div>

          <div className="scroll-content">
            <div className="portrait-frame">
              <Avatar raca={personagem.raca} />
            </div>

            <div className="character-header">
              <h2 className="character-name">{personagem.nome}</h2>
              <p className="character-class">
                {personagem.raca} {personagem.classe} • Nível {personagem.nivel}
              </p>
              <div className="hp-badge">
                ❤️ <span>{personagem.pontosDeVida} PV</span>
              </div>
            </div>

            <div className="divider">✦ 🛡️ ✦</div>

            <h3 className="section-title">Atributos</h3>
            <div className="atributos-grid">
              <div className="atributo-box">
                <span className="attr-label">FOR</span>
                <strong className="attr-val">{personagem.atributos.forca}</strong>
              </div>
              <div className="atributo-box">
                <span className="attr-label">DES</span>
                <strong className="attr-val">{personagem.atributos.destreza}</strong>
              </div>
              <div className="atributo-box">
                <span className="attr-label">CON</span>
                <strong className="attr-val">{personagem.atributos.constituicao}</strong>
              </div>
              <div className="atributo-box">
                <span className="attr-label">INT</span>
                <strong className="attr-val">{personagem.atributos.inteligencia}</strong>
              </div>
              <div className="atributo-box">
                <span className="attr-label">SAB</span>
                <strong className="attr-val">{personagem.atributos.sabedoria}</strong>
              </div>
              <div className="atributo-box">
                <span className="attr-label">CAR</span>
                <strong className="attr-val">{personagem.atributos.carisma}</strong>
              </div>
            </div>
          </div>

          <div className="scroll-bottom"></div>
        </div>
      )}
    </div>
  );
}

export default App;
