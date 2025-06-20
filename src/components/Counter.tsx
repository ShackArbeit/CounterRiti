import { useContext } from 'react'
import { CounterContext } from './CounterContext'
import CounterBox from './CounterBox'
import Button from '@mui/material/Button'
import Swal from 'sweetalert2'
import '../App.css'

/**
 * Shows all counters and a summary button.
 * @returns {JSX.Element} Counter component
 */
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
  } = useContext(CounterContext)

  const counterConfigs = [
    { label: '主桌(九桌)', value: counter9, inc: incrementCounter9, dec: decrementCounter9, reset: resetCounter9 },
    { label: '第一桌', value: counter1, inc: incrementCounter1, dec: decrementCounter1, reset: resetCounter1 },
    { label: '第二桌', value: counter2, inc: incrementCounter2, dec: decrementCounter2, reset: resetCounter2 },
    { label: '第三桌', value: counter3, inc: incrementCounter3, dec: decrementCounter3, reset: resetCounter3 },
    { label: '第四桌', value: counter4, inc: incrementCounter4, dec: decrementCounter4, reset: resetCounter4 },
    { label: '第五桌', value: counter5, inc: incrementCounter5, dec: decrementCounter5, reset: resetCounter5 },
    { label: '第六桌', value: counter6, inc: incrementCounter6, dec: decrementCounter6, reset: resetCounter6 },
    { label: '第七桌', value: counter7, inc: incrementCounter7, dec: decrementCounter7, reset: resetCounter7 },
    { label: '第八桌', value: counter8, inc: incrementCounter8, dec: decrementCounter8, reset: resetCounter8 },
  ]

  const counters = counterConfigs.map(c => c.value)
  const maxCounter = Math.max(...counters)
  const maxTable = counterConfigs[counters.indexOf(maxCounter)].label

  /**
   * Display final result modal.
   * @returns {Promise<void>} Promise resolved when modal closes
   */
  const handleEnd = async () => {
    await Swal.fire({
      title: '猜謎結束',
      text: `恭喜${maxTable}以${maxCounter}分獲得優勝 !`,
      icon: 'success',
      confirmButtonText: '返回',
    })
  }

  return (
    <>
      {counterConfigs.map(({ label, value, inc, dec, reset }) => (
        <CounterBox
          key={label}
          label={label}
          value={value}
          onIncrement={inc}
          onDecrement={dec}
          onReset={reset}
        />
      ))}
      <div className='TextMax'>
        {`最新領先的是${maxTable}，分數是：${maxCounter}`}
        <Button
          variant='contained'
          sx={{ fontSize: '25px', marginLeft: '50px' }}
          onClick={handleEnd}
        >
          總結
        </Button>
      </div>
    </>
  )
}

export default Counter
