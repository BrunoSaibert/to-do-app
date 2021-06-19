import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (!!newTaskTitle) {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((oldstate) => [...oldstate, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.done = !task.done;

        return task;
      })
    );
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldstate) => oldstate.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
