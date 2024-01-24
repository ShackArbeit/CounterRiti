import './App.css'
import CounterProvider from './CounterContext'
import Counter from './Counter'

function App() {

  return (
    <>
      <CounterProvider>  
        <div style={{textAlign:'center',position:'relative',bottom:'25px'}}>
        <h2>Trend-GoCome && RITI 尾牙益智活動計分</h2><br></br>
        <h3>Create by Shack Lin with NextJs</h3>
        </div>
         <Counter/>
      </CounterProvider>

    </>
  )
}

export default App
