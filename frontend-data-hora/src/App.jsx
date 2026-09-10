import { useState, useEffect } from 'react'
import { buscarDataHora } from './services/api.js'

export default function App() {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  async function consultar() {
    try {
      const resposta = await buscarDataHora()
      setDados(resposta)
      setErro('')
    } catch (err) {
      setErro(err.message || 'Não foi possível consultar a API. Verifique se o servidor está disponível.')
      setDados(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    consultar()

    const intervalo = setInterval(() => {
      consultar()
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="reino">
      <div className="pergaminho">
        <h1 className="titulo">⚔️ Relógio do Reino ⚔️</h1>
        <p className="subtitulo">Tempo oficial fornecido pela Torre de Criptografia</p>

        <div className="divisor">✦ ⚜ ✦</div>

        {erro && (
          <div className="erro">
            <strong>Erro:</strong> {erro}
          </div>
        )}

        {carregando && !dados && (
          <div className="carregando">Consultando as estrelas...</div>
        )}

        {dados && !erro && (
          <div className="conteudo">
            <div className="hora">{dados.hora}</div>
            <div className="data">{dados.data}</div>
            {dados.dataHoraCompleta && (
              <div className="completa">{dados.dataHoraCompleta}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
