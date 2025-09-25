// Importando React e hooks necessários
import React from 'react';
// Importando os componentes filhos
import Tasks from './Tasks/Index';
import Form from './Form/Index';
// Importando os estilos CSS do componente
import './Main.css';
// Importando hook customizado
import useTarefas from '../hooks/useTarefas';

// Componente principal usando hooks ao invés de classe
const Main: React.FC = () => {
  // Usando hook customizado para gerenciar todas as funcionalidades das tarefas
  const {
    novaTarefa,
    tarefas,
    handleSubmit,
    handleChange,
    handleEdit,
    handleDelete,
    handleReorder,
  } = useTarefas();

  return (
    <>
      {/* Div que cria o fundo colorido animado */}
      <div className="app-background"></div>

      {/* Container principal da aplicação */}
      <div className="main">
        <h1>Lista de Tarefas</h1>

        {/* Componente do formulário */}
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          novaTarefa={novaTarefa}
        />

        {/* Componente da lista de tarefas */}
        <Tasks
          tarefas={tarefas}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleReorder={handleReorder}
        />
      </div>
    </>
  );
};

export default Main;
