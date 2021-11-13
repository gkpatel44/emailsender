
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ });



  const inputhandler = (e) => {
    let { name, value } = e.target
    setData(data => ({ ...data, [name]: value }))

  }
  const submithandler = (event) => {
    event.preventDefault() 
    var dataa = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }


    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataa)
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <h1>Enquiry Form </h1>
      <form id="form" onSubmit={submithandler}>

        <label htmlFor="fname">FullName:
        <input
          name="fname"
          type="text"
          minLength="3"
          onChange={inputhandler}
        /></label>
        <br />

        <label htmlFor="fname">Email:
        <input
          name="email"
          type="email"
          onChange={inputhandler}
        /></label>
        <br />

        {/* <label>Subject</label> */}
        <label htmlFor="password">Subject: 
        <input
          id="Subject"
          type="text"
          name="subject"
          minLength="6"
          onChange={inputhandler}
        /></label>
        <br />

        <label htmlFor="msg">Messsage:
        <input
          name="msg"
          minLength="6"
          onChange={inputhandler}
        />
        </label>
        <br />

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
