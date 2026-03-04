"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert("メール確認！");
  };

  return (
    <div>
      <h1>Mini Rogue</h1>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>ログイン</button>
    </div>
  );
}
