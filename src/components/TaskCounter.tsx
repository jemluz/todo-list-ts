import styles from '../styles/TaskCounter.module.css'

export function TaskCounter() {
  return (
    <div className={styles.tasks_counter} >
      <strong className={styles.all_tasks} >
        Tarefas criadas <span className={styles.count} >0</span>
      </strong>

      <strong className={styles.done_tasks}>
        Tarefas concluídas <span className={styles.count}>0</span>
      </strong>
    </div>
  )
}