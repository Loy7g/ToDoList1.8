import React from 'react';
import { createPortal } from 'react-dom';
import './Tasks.css';
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { TasksProps } from '../../types';
import type { DropResult } from '@hello-pangea/dnd';

const Tarefas: React.FC<TasksProps> = ({ tarefas, handleEdit, handleDelete, handleReorder }) => {
  const dragWidthRef = React.useRef<number | null>(null);

  const handleOnDragEnd = (result: DropResult): void => {
    if (!result.destination) return;

    const items: string[] = Array.from(tarefas);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    handleReorder(items);
  };

  const handleOnDragStart = () => {
    const ul = document.querySelector('ul.tarefas') as HTMLElement | null;
    if (ul) {
      dragWidthRef.current = ul.getBoundingClientRect().width;
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => { handleOnDragEnd(result); dragWidthRef.current = null; }} onDragStart={handleOnDragStart}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <ul
            className="tarefas"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              minHeight: '100px',
              backgroundColor: snapshot.isDraggingOver ? 'rgba(102, 126, 234, 0.05)' : 'transparent',
              transition: 'background-color 0.2s ease',
              padding: '8px',
              borderRadius: '6px',
            }}
          >
            {tarefas.map((tarefa: string, index: number) => {
              // Como você já impede duplicatas no cadastro, usar o próprio texto torna o ID estável.
              // Se futuramente permitir textos iguais, troque para um UUID salvo junto com a tarefa.
              const draggableId = tarefa;
              return (
                <Draggable key={draggableId} draggableId={draggableId} index={index}>
                  {(provided, snapshot) => {
                    let style: React.CSSProperties = { ...provided.draggableProps.style };
                    if (snapshot.isDragging && dragWidthRef.current && dragWidthRef.current > 0) {
                      style = { ...style, width: `${dragWidthRef.current}px` };
                    }
                    const node = (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`task-item ${snapshot.isDragging ? 'dragging' : ''}`}
                        style={style}
                      >
                        <span className="task-text">{tarefa}</span>
                        <span className="acoes">
                          <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                            title="Editar tarefa"
                          />
                          <FaWindowClose
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                            title="Deletar tarefa"
                          />
                        </span>
                      </li>
                    );
                    if (snapshot.isDragging) {
                      const portal = document.getElementById('dnd-portal');
                      if (portal) return createPortal(node, portal);
                    }
                    return node;
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tarefas;
