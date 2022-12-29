import React, { useState } from "react";

const Index2 = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "ログアウト" : "ログイン"}
      </button>
      <hr />
      {isLogin && <p>ログイン</p>}
      <p style={{ display: isLogin ? "" : "none" }}>ログイン</p>
    </>
  );
};

export default Index2;
