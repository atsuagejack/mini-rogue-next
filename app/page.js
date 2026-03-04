"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [score, setScore] = useState(0);

  const fetchScore = async () => {
    const res = await fetch("/api/score");
    const data = await res.json();
    setScore(data.score);
  };

  const addScore = async () => {
    const res = await fetch("/api/score", { method: "POST" });
    const data = await res.json();
    setScore(data.score);
  };

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Mini Rogue</h1>
      <p>Score: {score}</p>
      <button onClick={addScore}>+1</button>
    </div>
  );
}
