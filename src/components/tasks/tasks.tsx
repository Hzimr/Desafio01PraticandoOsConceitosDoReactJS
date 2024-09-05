import { ChangeEvent, FormEvent, InvalidEvent, useId, useState } from 'react'

import plus from '../../assets/plus.svg'
import { Item } from '../item/item'
import { NoTask } from '../notask/notask'
import styles from './tasksStyles.module.css'

export function Tasks() {
  const id = useId()
  const [item, setItem] = useState<string[]>([])

  const [newItemText, setNewItemText] = useState<string>('')

  function handleCreateNewItem(event: FormEvent) {
    event.preventDefault()

    setItem([...item, newItemText])
    setNewItemText('')
  }

  function handleNewItemChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewItemText(event.target.value)
  }

  function handleNewItemInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteItem(itemToDelete: string) {
    const tasksWithoutDeletedOne = item.filter((item) => {
      return item !== itemToDelete
    })

    setItem(tasksWithoutDeletedOne)
  }

  const isNewItemEmpty = newItemText.length === 0

  return (
    <div className={styles.wrapper}>
      <div>
        <form className={styles.form} onSubmit={handleCreateNewItem}>
          <input
            name="item"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewItemChange}
            value={newItemText}
            onInvalid={handleNewItemInvalid}
            className={styles.input}
            required
          />
          <button
            className={styles.button}
            type="submit"
            disabled={isNewItemEmpty}
          >
            Criar
            <img src={plus} />
          </button>
        </form>
      </div>

      <header className={styles.tasksInfo}>
        <section className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <p className={styles.valorTasks}>{item.length}</p>
        </section>
        <section className={styles.tasksFinished}>
          <p>Concluídas</p>
          <p className={styles.valorTasks}>0</p>
        </section>
      </header>
      <div className={styles.content}>
        {item.length > 0 ? (
          <>
            {item.map((item) => (
              <Item
                key={id}
                textItem={item}
                onDeleteTask={deleteItem}
                isChecked={false}
              />
            ))}
          </>
        ) : (
          <NoTask />
        )}
      </div>
    </div>
  )
}
