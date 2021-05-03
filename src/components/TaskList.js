import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './Task'


const List = styled.ul``
const Title=styled.h1`
    margin-bottom:30px;
`
const Form=styled.form`
    width:350px;
    display:flex;
    justify-content:start;
    height:35px;
`
const TaskAdded= styled.input`
    align-self:flex-start;
    flex-grow:1;
    height:35px;
    border-radius:3px;
`
const AddTaskBtn = styled.button`
    margin-left:8px;
    width:90px;
    background-color:black;
    color:white;
    border:none;
    border-radius:5px;
    :hover{
        background-color:white;
        color:black;
        border:1px solid black
    }
`
const Wrapper=styled.div`
  margin-top:8px;
`

const TaskList = () => {
    const [taskList,setTaskList]=useState([]);
    const [taskToAdd,setTaskToAdd]= useState('')
    const [editFlag,setEditFlag]= useState(-1)

    const handleChange=(e)=>{
        let value=e.target.value;
        setTaskToAdd(value)
    }

    const addTask=(e)=>{
        e.preventDefault()

        if(taskToAdd!=='' && editFlag===-1){        
            let arr=[...taskList]
            arr.push(taskToAdd)
            setTaskList(arr)
            setTaskToAdd('')
        }
        else{
            let arr=[...taskList]
            arr[editFlag]=taskToAdd
            setTaskList(arr)
            setTaskToAdd('')
            setEditFlag(-1)

        }

    }
    const editTask=(index)=>{
        setTaskToAdd(taskList[index])
    }
    return (
        <Wrapper>
            <List>
                <Title>TO DO List</Title>
                <Form onSubmit={addTask}>
                    <TaskAdded type='text' value={taskToAdd} onChange={handleChange}></TaskAdded>
                    <AddTaskBtn type='submit'>Add Task</AddTaskBtn>
                </Form>
                <Wrapper>
                    <Task setEditFlag={setEditFlag} editTask={editTask} setTaskList={setTaskList} taskList={taskList}/>
                </Wrapper>
            </List>
        </Wrapper>
    )
}

export default TaskList
