import React, { useState, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg1 from './img/bg1.jpg'
// import bg2 from './img/bg2.jpg'
// import bg3 from './img/bg3.jpg'
// import bg4 from './img/bg4.jpg'
import './App.css'
import { Button } from 'react-bootstrap';

function App() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwvD1N-QhsX9qOl8FP7pRrob8Vyzd1KmmgyV5OrP67v9qvsvvbtN3gziCms7dqH3-H0iQ/exec"

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for Registering!😄');
    fetch(scriptUrl, {
      method: 'POST',
      'mode': 'no-cors',
      body: new FormData(formRef.current),

    }).then(res => {
      // console.log("SUCCESSFULLY SUBMITTED")
    })
      .catch(err => console.log(err));
    setNum('');
    setName('');
    setEmail('');
  }
  return (
    <>
      <div className='home'>
        <Carousel fade indicators={false} controls={false} keyboard={true} touch>
          <Carousel.Item>
            <img src={bg1} alt='bg1' />
            {/* <Carousel.Caption className='my-3'>
              <Button variant='danger' className='px-5 py-2 h1' href='https://www.youtube.com'>Watch Trailer</Button>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>



      <div className='register text-center p-1'>
        <h1 className='px-4'>Get Your Sweet Housewife a Gift</h1>
        <div className='d-block'>
          <form onSubmit={handleSubmit} method='post' ref={formRef} name="google-sheet">

            <div className='m-4'>
              <label class="input">
                <input class="input__field" type="text" placeholder=" " name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <span class="input__label h4">Your Name</span>
              </label>
            </div>
            <div className='m-4'>
              <label class="input">
                <input class="input__field" type="text" placeholder=" " name='number' value={num} onChange={(e) => setNum(e.target.value)} />
                <span class="input__label h4">Your Number</span>
              </label>
            </div>
            <div className='m-4'>
              <label class="input">
                <input class="input__field" type="text" placeholder=" " name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <span class="input__label h4">Your Email</span>
              </label>
            </div>

            <Button variant='none' className='px-5 py-2 h1 mt-3 mb-4' type='submit'>Submit</Button>
          </form>
        </div>
      </div>

      <div className='rules text-center p-5'>
        <h1>Rules & Regulations</h1>
        <Button style={{backgroundColor:"#2f2a19", color:"white"}} variant='none' className='px-5 py-2 h1 mt-5'>Click Here</Button>
      </div>
      
      <div
        class="text-center p-3"
        style={{ background: "linear-gradient(to right, #abbaab, #ffffff)" }}
      >
        <h4>A Project by <a href='https://www.instagram.com/we_hypeup/' style={{ textDecoration: "none", color:"purple" }}>Hype Up</a></h4>
      </div>
    </>
  )
}

export default App