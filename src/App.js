import React, {useState, useEffect, Fragment} from 'react'
import styled from 'styled-components';

const ToDoWrapper = styled.div`
padding: 20px 100px;
`

const ToDoFormWrapper = styled.div``
const CheckedListWrapper = styled.div``


const ToDoListWrapper = styled.div`
  margin-top: 20px;
`

const TextField = styled.input`
  height: 20px;
  width: 300px;
`

const SubmitButton = styled.button`
  margin-left: 10px;
  height: 20px;
`

const Header = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  text-decoration: ${(props) => props.checked ? 'line-through' : 'none'}
`

const getLocalStorageData = (storageName) => {
  const data = localStorage.getItem(storageName)

  if (data) return JSON.parse(data)
  if (!data) return []
}

const App = () => {
  const [toDoTextField, setToDoTextField] = useState('')
  const [toDoList, setToDoList] = useState(getLocalStorageData('my-current-todo-list'))
  const [checkedList, setCheckedList] = useState(getLocalStorageData('my-completed-todo-list'))

  const handleSubmitToDoButton = () => {
    let updatedToDoList = [...toDoList]

    updatedToDoList.push({
      'title': toDoTextField,
      'isChecked': false
    })

    setToDoList(updatedToDoList)
    setToDoTextField('')
  }

  const handleCheckedToDoItem = (event) => {
    const updatedToDoList = [...toDoList]
    const updatedCheckedList = [...checkedList]

    updatedToDoList.map((toDoItem, index) => {
      if (toDoItem.title === event.target.value) {
        if (event.target.checked) {
          toDoItem.isChecked = true
          updatedToDoList.splice(updatedToDoList.indexOf(toDoItem), 1)
          updatedCheckedList.push(toDoItem)
        }
      }
    })

    setToDoList(updatedToDoList)
    setCheckedList(updatedCheckedList)
  }

  const handleUncheckedTodoItem = (event) => {
    const updatedToDoList = [...toDoList]
    const updatedCheckedList = [...checkedList]

    updatedCheckedList.map((checkedItem, item) => {
      if (!event.target.checked) {
        checkedItem.isChecked = false
        updatedCheckedList.splice(updatedCheckedList.indexOf(checkedItem), 1)
        updatedToDoList.push(checkedItem)
      }
    })

    setToDoList(updatedToDoList)
    setCheckedList(updatedCheckedList)
  }

  useEffect(() => {
    localStorage.setItem('my-current-todo-list', JSON.stringify(toDoList))
    localStorage.setItem('my-completed-todo-list', JSON.stringify(checkedList))
  }, [toDoList, checkedList])

  return (
    <>
      <ToDoWrapper>
        <Header> To Do Application</Header>
        <ToDoFormWrapper>
          <TextField 
            type='text'
            value={toDoTextField}
            onChange={(event) => setToDoTextField(event.target.value)}
          /> 
          <SubmitButton onClick={handleSubmitToDoButton}> 
            Add Task
          </SubmitButton>
        </ToDoFormWrapper>

        <ToDoListWrapper>
          <h4> Outstanding Tasks: </h4>
          {!toDoList.length && <p> No tasks left! </p>}
          {!!toDoList.length && (
            toDoList.map((toDoItem, index) => (
              <div key={index}>
                <Label>
                  <input type='checkbox' value={toDoItem.title} onChange={handleCheckedToDoItem} checked={toDoItem.isChecked} />
                  {toDoItem.title}
                </Label>
              </div>
            ))
          )}
        </ToDoListWrapper>

        <CheckedListWrapper>
        <h4> Completed Tasks: </h4>
        {!checkedList.length && <p> No tasks completed! </p>}
          {!!checkedList.length && (
            checkedList.map((checkedItem, index) => (
              <div key={index}>
                <Label checked = {checkedItem.isChecked}>
                  <input type='checkbox' value={checkedItem.title} onChange={handleUncheckedTodoItem} checked={checkedItem.isChecked} />
                  {checkedItem.title}
                </Label>
              </div>
            ))
          )}
        </CheckedListWrapper>
      </ToDoWrapper>
      

    </>

  )
}

export default App;
