// Importa a biblioteca React para criar componentes
import React from 'react';
import { FaPlus } from "react-icons/fa";
import './Form.css';
// Importando tipos TypeScript
import type { FormProps } from '../../types';

// Componente funcional Form com tipagem TypeScript
const Form: React.FC<FormProps> = ({ handleChange, handleSubmit, novaTarefa }) => {
  return (
    // Formulário que captura o envio (submit) e chama a função handleSubmit
    <form onSubmit={handleSubmit} className="form">
      {/* Input controlado - o valor é gerenciado pelo estado do componente pai */}
      <input
        onChange={handleChange}    // Função chamada toda vez que o usuário digita
        type="text"               // Tipo do input (texto)
        value={novaTarefa}        // Valor vem do estado do componente pai
        placeholder="Digite a tarefa"  // Texto de exemplo no input
        required                  // Campo obrigatório
      />

      {/* Botão que submete o formulário */}
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default Form;
