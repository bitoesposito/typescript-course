import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAdd: (text: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    onAdd(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Your goal</label>
        <input type="text" id="title" ref={goalRef} />
      </div>
      <div>
        <label htmlFor="description">Short summary</label>
        <input type="text" id="description" ref={summaryRef} />
      </div>
      <div>
        <button>Add Goal</button>
      </div>
    </form>
  )
}