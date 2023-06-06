import React from 'react'
import './ExcluirAluno.css'

const ExcluirAluno = ({ id, atualizarTabela }) => {

  const handleDelete = async () => {

    const url = `http://localhost:8080/aluno/${id}`

    const response = await fetch(url, {
      method: 'DELETE',
    })

    if (response.ok) {
      console.log('Aluno excluído com sucesso!')
      atualizarTabela((prevState) => !prevState) // Inverte o estado para atualizar a tabela
    } else {
      console.log('Erro ao excluir aluno')
    }
  };

  return (
    <div className='botaoExcluir'>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  )
}

export default ExcluirAluno
