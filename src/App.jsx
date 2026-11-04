import Student from './components/Student'
function App() {
  const myCar = {
    brand:'chevrolet',
    name:'malibu',
    color:'black',
    price:'5000000000000000000000000$',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9YMLjcLjAkx1aaLNcVv3TCVpAqO7N_qduZ0UPczX4Q&s=10',
  };
  return(
    <>
    <Student car={myCar} />
    </>
  )
}


export default App;