import React, { useState } from 'react';
import LineChart from './components/LineChart'

export default function App(){

  const[data,setData] = useState([
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 10 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 20 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 30 },
    { name: 'July', value: 0 },
    { name: 'Aug', value: 20 },
    { name: 'Sep', value: 100 },
    { name: 'Oct', value: 55 },
    { name: 'Nov', value: 60 },
    { name: 'Dec', value: 80 },
  ]);
 
  const randomData = (e) => {
    e.preventDefault();
    setData(data.map(d => ({
                  name: d.name,
                  value: Math.floor((Math.random() * 100) + 1)
      }))) 
  }


  const parentWidth = 500,
        parentHeight = 200;


    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

 
    return (
      <div>
        <button onClick={randomData}>Randomize data</button>
        <LineChart data={data} width={parentWidth} height={parentHeight}/>
      </div>
     );
}
