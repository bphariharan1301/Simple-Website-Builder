import { React, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Task } from "./Task.jsx";
import initialData from "./initialData.jsx";

const Title = styled.h3`
    padding: 8px;
    text-align: center;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${(props) =>
        props.isDraggingOver ? "skyblue" : "white"};
    flex-grow: 1;
    min-height: 100px;
`;

let drop;

export const Column = ({ key, id, column }) => {
    const Container = styled.div`
        margin: 8px;
        border: 2px solid lightgrey;
        border-radius: 2px;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: white;
        width: 500px;

        display: flex;
        flex-direction: column;
        flex-grow: 1;
    `;
    return (
        <Container>
            <Title>{column}</Title>
            <Droppable droppableId={id} isDropDisabled={false}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))} */}
                        <Task key={key} index={id} />
                        {/* {provided.placeholder} */}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
};
