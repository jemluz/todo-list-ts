import todoLogo from './assets/todo-logo.svg'
import emptyTasks from './assets/empty-tasks.svg'
import styles from './styles/App.module.css'
import { CheckCircle, PlusCircle, Trash } from 'phosphor-react'

export function App() {
  function addTask(event: any) {
    event.preventDefault()
    console.log('Task criada!')
  }

  function deleteTask() {
    console.log('Task excluída!')
  }

  function toggleTask() {
    console.log('Task marcada/desmarcada!')
  }

  return (
    <div className="App">
      <div className={styles.wrapper} >
        {/* Header */}
        <header className={styles.header} >
          <img src={todoLogo} alt="Logo todo list" />
        </header>

        <main>
          {/* NewTaskForm */}
          <form className={styles.new_task_form}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type="submit" onClick={addTask} >
              Criar <PlusCircle size={28} />
            </button>
          </form>

          {/* TaskCounter */}
          <div className={styles.tasks_counter} >
            <strong className={styles.all_tasks} >
              Tarefas criadas <span className={styles.count} >0</span>
            </strong>

            <strong className={styles.done_tasks}>
              Tarefas concluídas <span className={styles.count}>0</span>
            </strong>
          </div>

          {/* EmptyTask */}
          <div className={styles.empty_tasks}>
            <img src={emptyTasks} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>

          <div className={styles.tasks_list}>
            {/* TASK  */}
            <div className={styles.task}>
              <div>
                <CheckCircle onClick={toggleTask} className={styles.checked_btn} size={28} weight="duotone" />
                {/* <Circle className={styles.check_btn} size={28} weight="duotone" /> */}
                <p className={styles.risked} >Dar banho nos gatos</p>
              </div>
              <Trash onClick={deleteTask} className={styles.delete_btn} size={24} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
