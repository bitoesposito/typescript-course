import { useState } from "react";

import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import NewGoal from "./components/NewGoal.tsx";

import type { Goal } from "./components/CourseGoals.tsx";



function App() {

  const [goals, setGoals] = useState<Goal[]>([
    {id: 1, title: "Learn React", description: "I want to learn React"},
    {id: 2, title: "Learn TypeScript", description: "I want to learn TypeScript"},
  ]);

  function handleDeleteGoal(id: number) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals(prevGoals => prevGoals.concat({id: Math.random(), title: text, description: summary}));
  }
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAdd={handleAddGoal} />
        <hr />
        <CourseGoals
          goals={goals}
          onDelete={handleDeleteGoal}
        />
      </main>
    </>
  );
}

export default App;
