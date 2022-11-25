import type { NextPage } from "next";
import { useState } from "react";

type Todo = {
  value: string;
  readonly id: number;
  removed: boolean;
};

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    //空の場合は処理を終了
    if (!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      removed: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy: Todo[] = todos.map((todo: Todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo: Todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <div className="m-auto my-10 max-w-[300px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}
          className="h-[30px] w-[300px]"
        >
          <input
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e)}
            className="border-navy h-[30px] w-[240px]"
          />
          <input
            type="submit"
            value="追加"
            onSubmit={handleOnSubmit}
            className="bg-color-navy mx-1 mr-[0px] h-[30px] w-[56px] text-white"
          />
        </form>
        <div className="mt-5">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="flex text-[16px] font-bold">
                {todo.removed === false ? (
                  <div className="my-1 flex h-[50px]">
                    <button
                      onClick={() => handleOnRemove(todo.id, todo.removed)}
                      className="bg-color-navy w-[50px]  text-white"
                    >
                      ×
                    </button>
                    <span className="border-navy w-[250px] border-red-800 pl-[20px] leading-[44px] ">
                      {todo.value}
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
