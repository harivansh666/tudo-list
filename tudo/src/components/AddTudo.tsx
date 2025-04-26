import { FormEvent, useContext, useState } from "react";
useContext()


function AddTudo() {
  const [todo, settodo] = useState("");
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    settodo("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex gap-2 m-8">
        <input
          type="text"
          placeholder="Type here"
          className="input w-80"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button type="submit" className="btn btn-soft">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTudo;
