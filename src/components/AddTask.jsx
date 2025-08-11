import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="task-list">
      <Input
        placeholder="Digite o título da tarefa."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        placeholder="Digite a descrição da tarefa."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="add"
        onClick={() => {
          if (title.trim() == "") {
            window.alert("Escreva um titulo.");
          } else if (description.trim() == "") {
            window.alert("Coloque a descrição");
          } else {
            props.addTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
