import { useState } from 'react'
import './AdicionarAluno.css'
import correto from '../assets/correto.png'

const url = "http://localhost:8080/aluno"

const AdicionarAluno = ({ setAluno }) => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [email, setEmail] = useState("")
    const [imagemVisivel, setImagemVisivel] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const adicionarAluno = {
            nome: nome,
            curso: curso,
            email: email
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adicionarAluno)
        })

        const alunoAdicionado = await response.json()

        setAluno((prevAluno) => [...prevAluno, alunoAdicionado])

        setNome("")
        setCurso("")
        setEmail("")

        if (response.ok) {
            const alunoAdicionado = await response.json();
            adicionarAluno(alunoAdicionado);
            setNome("");
            setCurso("");
            setEmail("");
            setImagemVisivel(true);
          } else {
            console.log('Erro ao adicionar aluno');
          }
    }

    return (
        <div className='adicionarAluno'>
            <h3>Adicionar Aluno:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type='text' name='nome' value={ nome } onChange={(e) => setNome(e.target.value)}></input>
                </label>
                <br />
                <label>
                    Curso:
                    <input type='text' name='curso' value={ curso } onChange={(e) => setCurso(e.target.value)}></input>
                </label>
                <br />
                <label>
                    Email:
                    <input type='text' name='email' value={ email } onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <br />
                <button type='submit'>Adicionar</button>
            </form>
            {imagemVisivel && <img src={correto} alt='Aluno Adicionado' />}
        </div>
    )
}

export default AdicionarAluno