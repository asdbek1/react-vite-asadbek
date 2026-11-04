import carImage from './images/images.jpg'
import Card from './Card'

const car = {
  name: "Asadbek",
  surname: "Komiljonov",
  age: 14,
  image: carImage,
  about: "Men Asadbekman men dasturlashda uqiyman"
}

function App() {
  return (
    <Card car={car} />
  )
}

export default App