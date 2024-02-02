import React from "react";
import TodoItems from "./TodoItems";
import {Button} from "react-bootstrap"

function TodoListo() {
    const [tasks, setTasks] = React.useState(["Tasca 1", "Tasca 2"]);

    function addTask(texto: string){
        setTasks(currentTasks => [...currentTasks, "Nueva Tarea"])
    }

    return (
        <div>
            <h2>La meva Llista de Tasques</h2>
            <ul>
                {tasks.map((tasks, index) => (
                        <TodoItems key={index} content={tasks}></TodoItems>
                    ))}
            </ul>
            <Button variant= "success" onClick={addTask("Nueva tarea")}>Añadir tarea</Button>
        </div>
    );
}
export default TodoListo