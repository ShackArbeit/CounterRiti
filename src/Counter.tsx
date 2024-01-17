import { useContext } from "react"
import { CounterContext } from "./CounterContext"
import './App.css'


const Counter = () => {
    
    const {
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
      }= useContext(CounterContext)
      const counters = [counter1, counter2, counter3, counter4, counter5, counter6, counter7, counter8, counter9];

      let maxCounter = counters[0];
  

      for (let j = 1; j < counters.length; j++) {
          if (counters[j] > maxCounter) {
              maxCounter = counters[j];
          }
      }

  return (
    <>
     <div className='CounterBox'>
            <button onClick={decrementCounter9} className='Button'>➖</button>
           <p className='Text'> 主桌的分數是 ： {counter9}</p>
           <button onClick={incrementCounter9} className='Button'>➕</button>
           <button onClick={resetCounter9} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter1} className='Button'>➖</button>
           <p className='Text'>第一桌分數是 ： {counter1}</p>
           <button onClick={incrementCounter1} className='Button'>➕</button>
           <button onClick={resetCounter1} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter2} className='Button'>➖</button>
           <p className='Text'>第二桌分數是 ： {counter2}</p>
           <button onClick={incrementCounter2} className='Button'>➕</button>
           <button onClick={resetCounter2} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter3} className='Button'>➖</button>
           <p className='Text'>第三桌分數是 ： {counter3}</p>
           <button onClick={incrementCounter3} className='Button'>➕</button>
           <button onClick={resetCounter3} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter4} className='Button'>➖</button>
           <p className='Text'>第四桌分數是 ： {counter4}</p>
           <button onClick={incrementCounter4} className='Button'>➕</button>
           <button onClick={resetCounter4} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter5} className='Button'>➖</button>
           <p className='Text'>第五桌分數是 ： {counter5}</p>
           <button onClick={incrementCounter5} className='Button'>➕</button>
           <button onClick={resetCounter5} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter6} className='Button'>➖</button>
           <p className='Text'>第六桌分數是 ： {counter6}</p>
           <button onClick={incrementCounter6} className='Button'>➕</button>
           <button onClick={resetCounter6} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter7} className='Button'>➖</button>
           <p className='Text'>第七桌分數是 ： {counter7}</p>
           <button onClick={incrementCounter7} className='Button'>➕</button>
           <button onClick={resetCounter7} className='Button' >重設 </button>
    </div>
    <div className='CounterBox'>
            <button onClick={decrementCounter8} className='Button'>➖</button>
           <p className='Text'>第八桌分數是 ： {counter8}</p>
           <button onClick={incrementCounter8} className='Button'>➕</button>
           <button onClick={resetCounter8} className='Button' >重設 </button>
    </div> 
    <p className='Text'>最大分數是：{maxCounter}</p>
    </>
  )
}

export default Counter