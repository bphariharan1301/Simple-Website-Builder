import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initialData.jsx";
import { Column } from "./Column.jsx";
import "@atlaskit/css-reset";
import styled from "styled-components";
import templates from "../assets/templates.json";

const ColumnContainer = styled.div`
    display: flex;
`;

function Home() {
    let [homeIndex, changeHomeIndex] = useState(0);
    let [state, setStateHook] = useState(templates);
    const [columns, setColumns] = useState(initialData.columns);
    console.log("templates", templates);

    // useEffect(async () => {
    //     await fetch("src/assets/templates.json")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setStateHook(data);
    //         });
    // });

    function onDragStart(start) {
        console.log(state.columnOrder.indexOf(start.source.droppableId));
        changeHomeIndex(state.columnOrder.indexOf(start.source.droppableId));
    }

    function onDragEnd({ destination, source, draggableId }) {
        homeIndex = null;

        document.body.style.color = "inherit";
        document.body.style.backgroundColor = "inherit";
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const startColumn = state.columns[source.droppableId];
        const finishColumn = state.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            const newTaskIds = Array.from(startColumn.taskIds);

            // re order array
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setStateHook(newState);
            return;
        }
        // handle cross column movement
        else {
            const startTaskIds = Array.from(startColumn.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStart = {
                ...startColumn,
                taskIds: startTaskIds,
            };

            const finishTaskIds = Array.from(finishColumn.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finishColumn,
                taskIds: finishTaskIds,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                },
            };
            setStateHook(newState);
            return;
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <ColumnContainer>
                {columns?.map((column, index) => {
                    return (
                        <Column
                            key={column.id}
                            id={column.id}
                            column={column.title}
                        />
                    );
                })}
            </ColumnContainer>
        </DragDropContext>
    );
}

export default Home;
