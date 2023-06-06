import { useEffect, useState } from 'react'
import './AlunoOnline.css'
import AdicionarAluno from './AdicionarAluno'
import ExcluirAluno from './ExcluirAluno'

const url = "http://localhost:8080/aluno/all"

const AlunoOnline = () => {

    const [aluno, setAluno] = useState([])
    const [atualizarTabela, setAtualizarTabela] = useState(false)

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(url)
            const data = await response.json()

            setAluno(data)
        }

        fetchData()
    }, [atualizarTabela])

    return (
        <div className='table-container'>
            <AdicionarAluno setAluno={ setAluno } />
            <br />
            <br />
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Curso:</th>
                        <th>Email:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        aluno.map((aluno) => (
                         <tr key={ aluno.id }>
                            <td>{ aluno.nome }</td>
                            <td>{ aluno.curso }</td>
                            <td>{ aluno.email }</td>
                            <ExcluirAluno id={ aluno.id } atualizarTabela={ setAtualizarTabela }/>
                         </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AlunoOnline