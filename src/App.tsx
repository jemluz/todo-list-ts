import styles from './styles/App.module.css'
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { TaskCounter } from './components/TaskCounter'
import { EmptyTasks } from './components/EmptyTasks'
import { Task } from './components/Task'

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
            <Task />
          </div>
        </main>
      </div>
    </div>
  )
}
