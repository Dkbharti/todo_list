import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Item= styled.ul`
    width:250x;
    flex-grow:1;
    margin-right:5px;
`
const Container= styled.div`
    width:350px;
    display:flex;
    justify-content:space-around;
`
const Wrap=styled.div`
    :hover{
        cursor: pointer;
    }
`


const Task = ({taskList, setTaskList,setEditFlag, editTask}) => {

    const deleteTask=(index)=>{
        let arr= [...taskList]
        arr.splice(index,1)
        setTaskList(arr)
    }

    return (
        <>
         {taskList.map((task,index)=>{
             return(
                <Container>
                    <Item key={index}>{task}</Item>
                    <Wrap><DeleteIcon style={{ fontSize: 28,marginLeft:'8px' }} onClick={()=>{deleteTask(index)}}/></Wrap>
                    <Wrap><EditIcon style={{ fontSize: 28, marginLeft:'8px' }} onClick={()=>{editTask(index);setEditFlag(index)}}/></Wrap>
                </Container>
             )
         })}               
        </>
    )
}

export default Task
