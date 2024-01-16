import './App.css'
import CounterProvider from './CounterContext'
import Counter from './Counter'

function App() {

  return (
    <>
      <CounterProvider>  
        <div style={{textAlign:'center',position:'relative',bottom:'25px'}}>
        <h1>Trend-GoCome && RITI 尾牙益智活動計分</h1>
        </div>
         <Counter/>
      </CounterProvider>

    </>
  )
}

export default App
