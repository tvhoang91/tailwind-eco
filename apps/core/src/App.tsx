import { Button } from '@yaywind/components';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container py-6">
        <h1 className="text-2xl font-bold">Vite + React</h1>

        <div className="round my-4 flex gap-4 rounded border border-solid border-gray-400 bg-background p-3">
          {/* <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            count is {count}
          </button> */}

          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

          <Button className="bg-accent text-accent-foreground">Accent</Button>

          <Button className="bg-destructive text-destructive-foreground">Destructive</Button>
        </div>
      </div>
    </>
  );
}

export default App;
