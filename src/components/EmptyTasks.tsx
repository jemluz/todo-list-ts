import styles from '../styles/EmptyTasks.module.css'
import emptyTasks from '../assets/empty-tasks.svg'

export function EmptyTasks() {
  return (
    <div className={styles.empty_tasks}>
      <img src={emptyTasks} alt="" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}