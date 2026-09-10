const API_URL = import.meta.env.VITE_API_URL || ''

export async function buscarDataHora() {
  if (!API_URL) {
    throw new Error('URL da API não configurada. Defina VITE_API_URL.')
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)

  try {
    const response = await fetch(`${API_URL}/api/data-hora`, { signal: controller.signal })

    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    const dados = await response.json()

    if (!dados || typeof dados !== 'object') {
      throw new Error('Resposta inválida da API.')
    }

    return dados
  } catch (err) {
    clearTimeout(timeout)
    throw err
  }
}
