import Button from "./components/Button"
import Profile from '../src/assets/image/TEA.jpg'

function App() {
 

  return (
    <>
      <div>
        <Button image = {Profile}  title = 'Emmanuel Teadev' age = '30 years' address = 'Ikorodu, Lagos State' />
      </div>
    </>
  )
}

export default App
