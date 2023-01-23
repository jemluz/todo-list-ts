import todoLogo from './assets/todo-logo.svg'
import emptyTasks from './assets/empty-tasks.svg'
import styles from './styles/App.module.css'
import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react'

export function App() {
  function addTask() {
    console.log('Task criada!')
  }

  return (
    <div className="App">
      <div className={styles.wrapper} >
        <header className={styles.header} >
          <img src={todoLogo} alt="Logo todo list" />
        </header>

        <main>
          <form className={styles.new_task_form}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type="submit" onClick={addTask} >
              Criar <PlusCircle size={28} />
            </button>
          </form>

          <div className={styles.tasks_counter} >
            <strong className={styles.all_tasks} >
              Tarefas criadas <span className={styles.count} >0</span>
            </strong>

            <strong className={styles.done_tasks}>
              Tarefas concluídas <span className={styles.count}>0</span>
            </strong>
          </div>

          <div className={styles.empty_tasks}>
            <img src={emptyTasks} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>

          <div className="tasks_list">
            <div className='task'>
              {/* <CheckCircle size={28} /> */}
              <Circle size={28} />
              <p>Dar banho nos gatos</p>
              <Trash size={24} />
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}
