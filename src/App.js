import React, { useRef } from "react";
import UserList from "./UserList";
import { useRef } from "react";

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@gmail.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@gmail.com",
    },
  ];

  //useRef는 특정 돔을 선택할 때 쓸 수도 있지만
  //어떠한 변수를 기억하고 싶을 때 사용 가능
  //이 값은 컴포넌트가 리랜더링되어도 사용할 수 있다.
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4

    nextId.current += 1;
    
  };

  return <UserList users={users} />;
}

export default App;
