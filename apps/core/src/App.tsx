import { Button } from '@yaywind/components';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bw-container bw-py-6">
        <h1 className="bw-text-2xl bw-font-bold">Vite + React</h1>

        <div className="bw-round bw-my-4 bw-flex bw-gap-4 bw-rounded bw-border bw-border-border bw-bg-background bw-p-3">
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </>
  );
}

export default App;
