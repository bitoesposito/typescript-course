export type Goal = {
  id: number;
  title: string;
  description: string;
}

interface CourseGoalsProps {
  goals: Goal[]
  onDelete: (id: number) => void;
}

export default function CourseGoals(props: CourseGoalsProps) {
  return (
    <ul id="course-goals">
      {props.goals.map((goal) => (
        <li key={goal.id}>
          <div>
            <h2>{goal.title}</h2>
            <p>{goal.description}</p>
          </div>
          <button onClick={() => props.onDelete(goal.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}