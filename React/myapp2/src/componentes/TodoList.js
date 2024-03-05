import React from "react";
import { useState } from "react";
import {Button} from "react-bootstrap"

function TodoList(){
    const [tasks, setTasks] = React.useState(["Tasca 1", "Tasca 2"]);
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Paco');

    function addTask(){
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

export default TodoList