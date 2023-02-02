import styles from './styles/App.module.css'
import { CheckCircle, Trash } from 'phosphor-react'
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { TaskCounter } from './components/TaskCounter'
import { EmptyTasks } from './components/EmptyTasks'

export function App() {
  function deleteTask() {
    console.log('Task excluída!')
  }

  function toggleTask() {
    console.log('Task marcada/desmarcada!')
  }

  return (
    <div className="App">
      <div className={styles.wrapper} >
        <Header />

        <main>
          <NewTaskForm />
          <TaskCounter />
          <EmptyTasks />

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
