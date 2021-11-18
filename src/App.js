
import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState({ });
  const [models,setmodels] = useState(false);
  const [resp,setResp] = useState("");



  const inputhandler = (e) => {
    let { name, value } = e.target
    setData(data => ({ ...data, [name]: value }))

  }
  const submithandler = (event) => {
   
    event.preventDefault() 
    fetch("http://localhost:3030/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => {
     
      setResp(data)
      setmodels(true)
      toast.success(data.message);
      setmodels(true)
      setTimeout(() => {
        setmodels(false)
      }, 2001);
    })
      .catch(err => console.log(err))
  }
  return (
    models?
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    :
    <div className="container">
      <h1>Enquiry Form </h1>
      <form id="form" onSubmit={submithandler}>

        <label htmlFor="fname">FullName:
        <input
          name="name"
          type="text"
          minLength="3"
          onChange={inputhandler}
        /></label>
        <br />

        <label htmlFor="name">Email:
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
          name="message"
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
