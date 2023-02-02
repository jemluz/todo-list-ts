import { CheckCircle, Trash } from 'phosphor-react'
import styles from '../styles/Task.module.css'

export function Task() {
  function deleteTask() {
    console.log('Task excluída!')
  }

  function toggleTask() {
    console.log('Task marcada/desmarcada!')
  }

  return (
    <div className={styles.task}>
      <div>
        <CheckCircle onClick={toggleTask} className={styles.checked_btn} size={28} weight="duotone" />
        {/* <Circle className={styles.check_btn} size={28} weight="duotone" /> */}
        <p className={styles.risked} >Dar banho nos gatos</p>
      </div>
      <Trash onClick={deleteTask} className={styles.delete_btn} size={24} />
    </div>
  )
}