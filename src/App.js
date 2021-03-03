import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Cart from './Component/Cart/Cart';
import Friend from './Component/Friend/Friend';
import personData from './PersonData/person.json'


function App() {
  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    setUsers(personData)
    console.log(personData);
  }, [])

  const HandleReqBtn = (person) =>{
    const newCart = [...cart, person];
    setCart(newCart);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Cart CartDetails = {cart}></Cart>
        {
          users.map(user => {
            return (
              <div>
                <Friend Persons={user} HandleReqBtn={HandleReqBtn}></Friend>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
