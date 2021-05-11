import React,{useState} from 'react';
import './style.css'
const Secant = () => {
  const[Equation,setEquation]=useState('');
  const[XL,setXL]=useState('');
  const[XR,setXR]=useState('');

  const[inputField,setInputField]=useState('');

  console.log('render number',Equation,XL,XR)
  const onSubmit =(e) =>{
    e.preventDefault();

    const payload ={

      Equation,XL,XR
    };
    console.log('submit payload',payload);

    //fetch('/api/auth/number',{
    //  method: 'Post',
    //  headers:{
    //    'Content-Type':'a[[lication/json'
    //  },
    //  body:JSON.stringify(payload)
    //})

  }
  return (
    <div class="container my-4">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form onSubmit={onSubmit}>
          <header className="header">
            <div className="container">
              <div className="header_area">
                <h1>Secant</h1>
              </div>
            </div>
          </header>
            <div className="mb-3">
          <label for="exampleInputnumber" className="form-label">Please input you Equation</label>
          <input type="Equation" className="form-control" id="exampleInputnumber" placeholder="Your Equation.."  
          onChange={(e)=> setEquation(e.target.value)}
          />
          <label for="exampleInputnumber" className="form-label">Please input you XL</label>
          <input type="XL" className="form-control" id="exampleInputnumber" placeholder="Your XL.."
          onChange={(e)=> setXL(e.target.value)}
          />
          <label for="exampleInputnumber" className="form-label">Please input you XR</label>
          <input type="XR" className="form-control" id="exampleInputnumber" placeholder="Your XR.."
          onChange={(e)=> setXR(e.target.value)}
          />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Secant;