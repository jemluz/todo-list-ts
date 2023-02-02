import { PlusCircle } from 'phosphor-react'
import styles from '../styles/NewTaskForm.module.css'

export function NewTaskForm() {
  function addTask(event: any) {
    event.preventDefault()
    console.log('Task criada!')
  }

  return (
    <form className={styles.new_task_form}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit" onClick={addTask} >
        Criar <PlusCircle size={28} />
      </button>
    </form>
  )
}