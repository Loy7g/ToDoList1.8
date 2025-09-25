// Tipos para a aplicação de lista de tarefas

export interface Task {
  id: string;
  text: string;
  completed?: boolean;
}

export interface AppState {
  novaTarefa: string;
  tarefas: string[];
  index: number;
}

export interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  novaTarefa: string;
}

export interface TasksProps {
  tarefas: string[];
  handleEdit: (e: React.MouseEvent<SVGElement>, index: number) => void;
  handleDelete: (e: React.MouseEvent<SVGElement>, index: number) => void;
  handleReorder: (novasTarefas: string[]) => void;
}
