import React, { useState } from 'react';

const AddNumbers = () => {
  const [Result, setResult] = useState(0);

  const handleForm = async(e) => {
    e.preventDefault();
    const { firstnum, secondnum } = e.target.elements;
    const first = parseInt(firstnum.value);
    const second = parseInt(secondnum.value);
    const res = first + second;
    setResult(res);
    const res1 = await fetch("/addnumbers" ,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "firstnum": first,
        "secondnum": second,
        "res" : res,
  
      })
    });
  
    const res2  = await res1.json();
  
    if(res2.status){
      console.log("ok")
    }
    firstnum.value = '';
    secondnum.value = '';
  };

  return (
    <div>
      <div className="Container  my-5">
        <form className="w-25 mx-auto" onSubmit={handleForm} method ='POST'>
          <div className="d-grid gap-3">
            <h1>Adding Numbers</h1>

            <input type="number" name="firstnum" placeholder="First Number" />

            <input type="number" name="secondnum" placeholder="Second Number" />
            <button type="submit" className='bg-info text-white fw-bold'>Add</button>
          </div>
          <div className='p-3 fs-3'>
            <span>Answer is: {Result}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNumbers;
