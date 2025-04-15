import './App.css'
import Button from './components/Button'

function App() {
  const buttonColors = ['gradient', 'red', 'blue', 'green', 'purple'];

  return (
    <>
      <h1>Hello, colourful button!</h1>
      <Button colors={buttonColors} />
    </>
  )
}

export default App
