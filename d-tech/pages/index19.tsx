import React, { useState } from 'react';

const Index19 = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput('');
      }}
    >
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </form>
  );
};

export default Index19;
