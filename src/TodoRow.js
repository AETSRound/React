import React from 'react'
import styled from "styled-components"

const TodoRow = ({index, todo, handleClickRemove}) => {
    return (
        <Container onClick={() => handleClickRemove(index)}>
            {index}----{todo}
        </Container>
    )
}

const Container= styled.div``;

export default TodoRow
