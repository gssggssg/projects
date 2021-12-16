import * as React from "react"
import { Routes, Route } from "react-router-dom";
import Snake from './pages/Snake'
import Gobang from './pages/Gobang';

const App = () => {
  return (
    <div>
      <ul>
        <a href="/snake">Snake</a>
        <a href="/gobang">Gobang</a>
      </ul>
      <Routes>
        <Route path="/snake" element={<Snake />} />
        <Route path="/gobang" element={<Gobang />} />
      </Routes>
    </div>
  );
}

export default App;