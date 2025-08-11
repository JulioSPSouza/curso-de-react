import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { stringify, v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    console.log("Tasks foi alterado.");
    localStorage.setItem("tasks", JSON.stringify(tasks)); //Manter tarefas na memória do navegador
  }, [tasks]);
  useEffect(() => {
    async function fetchTasks() {
      //CHAMAR API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      const data = await response.json(); //converte em json
      console.log(data);
      setTasks(data);
    }
    //fetchTasks();
    //retirar comentário pra chamar API de tarefas aleatórias.
  }, []);
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //precisa atualizar
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
        //ao dar return já sai da função, não precisa de else
      }
      //não precisa atualizar
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleTaskCLick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }
  function addTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="custom-container">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTaskSubmit={addTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleTaskCLick={onDeleTaskCLick}
        />
      </div>
    </div>
  );
}

export default App;
