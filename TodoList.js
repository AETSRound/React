import React from 'react'
import styled from "styled-components"
import TodoRow from "./TodoRow"

const TodoList = ({todoList, handleClickRemove}) => {
    return (
        <Container>
            {todoList.map(
                (todo, index) => (
                    <TodoRow 
                    todo={todo} 
                    key={index} 
                    index={index}
                    handleClickRemove={handleClickRemove}
                    ></TodoRow>
                )
            )}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 33px;
    display : flex;
    flex-direction: column;
    align-items:center;
`;

export default TodoList
