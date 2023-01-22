import todoLogo from './assets/todo-logo.svg'
import './App.css'
import { PlusCircle } from 'phosphor-react'

export function App() {
  function addTask() {
    console.log('Task criada!')
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <img src={todoLogo} alt="Logo todo list" />
        </header>

        <main>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type="submit" onClick={addTask} >
              Criar <PlusCircle size={32} />
            </button>
          </form>
        </main>
      </div>
    </div>

  )
}
