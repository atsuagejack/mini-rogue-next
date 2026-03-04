"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert("メール確認！");
  };
  
  const saveScore = async (value) => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("ログインしてください");
      return;
    }

    await supabase.from("scores").insert([
    {
      user_id: user.id,
      score: value
    }
    ]);

    alert("保存完了");
  };
  
  return (
    <div>
      <h1>Mini Rogue</h1>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>ログイン</button>
      <button onClick={() => saveScore(100)}>スコア100を保存</button>
    </div>
  );
}
