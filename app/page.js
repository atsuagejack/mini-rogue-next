"use client";
import { useState } from "react";

export default function Home() {
  const [playerHP, setPlayerHP] = useState(30);
  const [enemyHP, setEnemyHP] = useState(20);

  const attack = () => {
    const damage = Math.floor(Math.random() * 6) + 1;
    setEnemyHP(enemyHP - damage);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mini Rogue</h1>
      <p>Player HP: {playerHP}</p>
      <p>Enemy HP: {enemyHP}</p>
      <button onClick={attack}>Attack</button>
    </div>
  );
}
