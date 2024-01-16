import React, { createContext, useState } from 'react';
import { CounterContextType } from './CounterInterface';



  

export const CounterContext = createContext<CounterContextType>({
    counter1: 0,
    // setCounter1: () => {},
    incrementCounter1: () => {},
    decrementCounter1: () => {},
    resetCounter1: () => {},
    counter2: 0,
    // setCounter2: () => {},
    incrementCounter2: () => {},
    decrementCounter2: () => {},
    resetCounter2: () => {},
    counter3: 0,
    // setCounter3: () => {},
    incrementCounter3: () => {},
    decrementCounter3: () => {},
    resetCounter3: () => {},
    counter4: 0,
    // setCounter4: () => {},
    incrementCounter4: () => {},
    decrementCounter4: () => {},
    resetCounter4: () => {},
    counter5: 0,
    // setCounter5: () => {},
    incrementCounter5: () => {},
    decrementCounter5: () => {},
    resetCounter5: () => {},
    counter6: 0,
    // setCounter6: () => {},
    incrementCounter6: () => {},
    decrementCounter6: () => {},
    resetCounter6: () => {},
    counter7: 0,
    // setCounter7: () => {},
    incrementCounter7: () => {},
    decrementCounter7: () => {},
    resetCounter7: () => {},
    counter8: 0,
    // setCounter8: () => {},
    incrementCounter8: () => {},
    decrementCounter8: () => {},
    resetCounter8: () => {},
    counter9: 0,
    // setCounter9: () => {},
    incrementCounter9: () => {},
    decrementCounter9: () => {},
    resetCounter9: () => {},
    // counter10: 0,
    // setCounter10: () => {},
    // incrementCounter10: () => {},
    // decrementCounter10: () => {},
    // resetCounter10: () => {},
})


const CounterProvider = ({ children }: { children: React.ReactNode }) => {
 
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [counter9, setCounter9] = useState(0);
//   const [counter10, setCounter10] = useState(0);
  
  const incrementCounter1 = () => setCounter1(counter1 + 1);
  const decrementCounter1 = () => setCounter1(counter1 - 1);
  const resetCounter1=()=>setCounter1(0)
  const incrementCounter2 = () => setCounter2(counter2 + 1);
  const decrementCounter2 = () => setCounter2(counter2 - 1);
  const resetCounter2=()=>setCounter2(0)
  const incrementCounter3 = () => setCounter3(counter3 + 1);
  const decrementCounter3 = () => setCounter3(counter3 - 1);
  const resetCounter3=()=>setCounter3(0)
  const incrementCounter4 = () => setCounter4(counter4 + 1);
  const decrementCounter4 = () => setCounter1(counter4 - 1);
  const resetCounter4=()=>setCounter4(0)
  const incrementCounter5 = () => setCounter5(counter5 + 1);
  const decrementCounter5 = () => setCounter5(counter5 - 1);
  const resetCounter5=()=>setCounter5(0)
  const incrementCounter6 = () => setCounter6(counter6 + 1);
  const decrementCounter6 = () => setCounter6(counter6 - 1);
  const resetCounter6=()=>setCounter6(0)
  const incrementCounter7 = () => setCounter7(counter7 + 1);
  const decrementCounter7 = () => setCounter7(counter7 - 1);
  const resetCounter7=()=>setCounter7(0)
  const incrementCounter8 = () => setCounter8(counter8 + 1);
  const decrementCounter8 = () => setCounter8(counter8 - 1);
  const resetCounter8=()=>setCounter8(0)
  const incrementCounter9 = () => setCounter9(counter9 + 1);
  const decrementCounter9 = () => setCounter9(counter9 - 1);
  const resetCounter9=()=>setCounter9(0)

  const contextValue: CounterContextType = {
    counter1,
    incrementCounter1,
    decrementCounter1,
    resetCounter1,
    counter2,
    incrementCounter2,
    decrementCounter2,
    resetCounter2,
    counter3,
    incrementCounter3,
    decrementCounter3,
    resetCounter3,
    counter4,
    incrementCounter4,
    decrementCounter4,
    resetCounter4,
    counter5,
    incrementCounter5,
    decrementCounter5,
    resetCounter5,
    counter6,
    incrementCounter6,
    decrementCounter6,
    resetCounter6,
    counter7,
    incrementCounter7,
    decrementCounter7,
    resetCounter7,
    counter8,
    incrementCounter8,
    decrementCounter8,
    resetCounter8,
    counter9,
    incrementCounter9,
    decrementCounter9,
    resetCounter9,
}

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
