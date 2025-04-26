import { createContext, ReactNode } from "react";

export type TodoProviderProp = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoType = {
  Todos: Todo[];
  handleAddTodo: (tast: string) => void;
};

export const tudoContext = createContext<TodoType>(null);

export const TodoProvider = ({ children }: TodoProviderProp) => {
  return (
    <tudoContext.Provider value={{ Todos, handleAddTodo }}>
      {children}
    </tudoContext.Provider>
  );
};
