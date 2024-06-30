import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled/macro";
import { Task } from "./Task";

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

const DropZone = ({ column, tasks, id, isDropDisabled }) => {
    drop = isDropDisabled;
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
        // <Droppable droppableId="dropzone">
        //     {(provided, snapshot) => (
        //         <div
        //             {...provided.droppableProps}
        //             ref={provided.innerRef}
        //             className={`flex-1 min-h-screen p-5 rounded-md transition-all duration-300 ${
        //                 snapshot.isDraggingOver
        //                     ? "bg-blue-200 border-2 border-blue-500"
        //                     : "bg-gray-200"
        //             }`}
        //         >
        //             {loadedTemplate ? (
        //                 <div>{loadedTemplate.name}</div>
        //             ) : (
        //                 <p className="text-center text-gray-500">
        //                     Drag a template here
        //                 </p>
        //             )}
        //             {provided.placeholder}
        //         </div>
        //     )}
        // </Droppable>
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id} isDropDisabled={drop}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
};

export default DropZone;
