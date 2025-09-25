// Hook customizado para gerenciar tarefas
import { useState, useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

interface UseTarefasReturn {
  novaTarefa: string;
  tarefas: string[];
  index: number;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEdit: (e: React.MouseEvent<SVGElement>, taskIndex: number) => void;
  handleDelete: (e: React.MouseEvent<SVGElement>, taskIndex: number) => void;
  handleReorder: (novasTarefas: string[]) => void;
}

const useTarefas = (): UseTarefasReturn => {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useLocalStorage<string[]>('tarefas', []);
  const [index, setIndex] = useState<number>(-1);

  // Hook useCallback para otimizar performance da função handleSubmit
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const novaTarefaTrimmed = novaTarefa.trim();

    // Valida se a tarefa não está vazia
    if (!novaTarefaTrimmed) {
      alert('Por favor, digite uma tarefa');
      return;
    }

    // Verifica se a tarefa já existe
    if (tarefas.indexOf(novaTarefaTrimmed) !== -1) {
      alert('Esta tarefa já existe');
      return;
    }

    if (index === -1) {
      // Adicionando nova tarefa
      setTarefas(prevTarefas => [...prevTarefas, novaTarefaTrimmed]);
      setNovaTarefa('');
    } else {
      // Editando tarefa existente
      setTarefas(prevTarefas => {
        const novasTarefas = [...prevTarefas];
        novasTarefas[index] = novaTarefaTrimmed;
        return novasTarefas;
      });
      setNovaTarefa('');
      setIndex(-1);
    }
  }, [novaTarefa, tarefas, index, setTarefas]);

  // Hook useCallback para otimizar performance da função handleChange
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(e.target.value);
  }, []);

  // Hook useCallback para otimizar performance da função handleEdit
  const handleEdit = useCallback((e: React.MouseEvent<SVGElement>, taskIndex: number) => {
    e.preventDefault();
    setIndex(taskIndex);
    setNovaTarefa(tarefas[taskIndex]);
  }, [tarefas]);

  // Hook useCallback para otimizar performance da função handleDelete
  const handleDelete = useCallback((e: React.MouseEvent<SVGElement>, taskIndex: number) => {
    e.preventDefault();

    const confirmDelete = window.confirm('Tem certeza que deseja deletar esta tarefa?');
    if (!confirmDelete) return;

    setTarefas(prevTarefas => {
      const novasTarefas = [...prevTarefas];
      novasTarefas.splice(taskIndex, 1);
      return novasTarefas;
    });

    // Se estava editando a tarefa que foi deletada, limpa o formulário
    if (index === taskIndex) {
      setNovaTarefa('');
      setIndex(-1);
    } else if (index > taskIndex) {
      // Ajusta o índice se uma tarefa anterior foi deletada
      setIndex(prev => prev - 1);
    }
  }, [index, setTarefas]);

  // Hook useCallback para otimizar performance da função handleReorder
  const handleReorder = useCallback((novasTarefas: string[]) => {
    setTarefas(novasTarefas);
    // Reset index if reordering
    setIndex(-1);
    setNovaTarefa('');
  }, [setTarefas]);

  return {
    novaTarefa,
    tarefas,
    index,
    handleSubmit,
    handleChange,
    handleEdit,
    handleDelete,
    handleReorder,
  };
};

export default useTarefas;
