import React from 'react';
import './App.css';
//@ts-ignore
import App2Hello from 'app2/Hello';
//@ts-ignore
import Hello from 'remote/Hello';
import { Button } from 'antd';
//@ts-ignore
// const Hello = React.lazy(() => import('remote/Hello'));
function App() {
  
  return (
    <div style={{ color: 'red' }}>
      <React.Suspense fallback={"loading"}>
        <Hello ></Hello>
        <App2Hello></App2Hello>
        <Button size='small'  type='primary'>adfadf</Button>
      </React.Suspense>

    </div>
  );
}

export default App;
