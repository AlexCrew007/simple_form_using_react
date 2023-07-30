import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    country:'India',
    streetAddress:'',
    city:'',
    state:'',
    zipCode:'',
    isActive1:false,
    isActive2:false,
    isActive3:false,
    allRadioBtn:false,
  });
 
  function submitHandler(e){
    e.preventDefault();
    console.log(formData);
  }

  function inputHandler(e){
    const {name,value,type,checked}=e.target
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked :value,
      }
    })
  }

  return (
    <div className=" w-[100vw] h-[100vh] justify-center flex flex-wrap text-black">
      <form className="form-group flex flex-wrap flex-col" onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <input className='form-control' onChange={inputHandler} placeholder='first name' id="firstName" name="firstName" value={formData.firstName} type="text"></input>

        <label htmlFor='lastName'>Last Name</label>
        <input className='form-control' onChange={inputHandler} placeholder='last name' id="lastName" name="lastName" value={formData.lastName} type="text"></input>

        <label htmlFor='email'>Email</label>
        <input className='form-control' onChange={inputHandler} placeholder='something@gmail.com' id="email" name="email" value={formData.email} type="email"></input>

        <label htmlFor='country'>Country</label>
        <select className='form-control' id='country' name='country'   value={formData.country} onChange={inputHandler}>
          <option value='India'>India</option>
          <option value='Japan'>Japan</option>
          <option value='Chaina'>Chaina</option>
          <option value='Pakistan'>Pakistan</option>
          <option value='Sri Lanka'>Sri Lanka</option>
          <option value='Bangaladesh'>Bangaladesh</option>
          <option value='Afganistan'>Afganistan</option>
        </select>
        
        <label htmlFor='address'>Street address</label>
        <input className='form-control' onChange={inputHandler} placeholder='street address' id="address" name="streetAddress" value={formData.streetAddress} type='text'></input>

        <label htmlFor='city'>City</label>
        <input className='form-control' onChange={inputHandler} placeholder='City' id="city" name="city" value={formData.city} type='text'></input>

        <label htmlFor='state'>State</label>
        <input className='form-control' onChange={inputHandler} placeholder='Sate' id="state" name="state" value={formData.state} type='text'></input>
        
        <label htmlFor='zipCode'>Zip / Postal code</label>
        <input className='form-control' onChange={inputHandler} placeholder='8310**' id="zipCode" name="zipCode" value={formData.zipCode} type='text'></input>

        <fieldset className="form-control flex flex-wrap flex-col">
          <legend>By Email</legend>

          <div className=''>
            <input onChange={inputHandler} id="comments" type='checkbox' name='isActive1' checked={formData.isActive1}></input>
            <div className='flex flex-col'>
              <label htmlFor='comments'>Comments</label>
              <p> Get notified when someones posts a comment on a posting.</p>
            </div>
            <input onChange={inputHandler} id='candidates' type='checkbox' name='isActive2' checked={formData.isActive2}></input>
            <div className='flex flex-col'>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>

            <input onChange={inputHandler} id='offers' type='checkbox' name='isActive3' checked={formData.isActive3}></input>
            <div className='flex flex-col'>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when someones a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
       
        <fieldset className="form-control flex flex-wrap flex-col border-0px" >
          
          <legend>Push Notification</legend>
          <p>These are deliverd via SMS to your mobile phone.</p>
            <div className=''>
              <input onChange={inputHandler} value='Everything'  id='Everything' name='allRadioBtn' type='radio'></input>
              <label htmlFor='Everything'>Everything</label>
            </div>

            <div> 
              <input onChange={inputHandler} value="No push notfication"  id='No push notfication' name='allRadioBtn' type='radio'></input>
              <label htmlFor='No push notfication'>No push notfication</label>
            </div>

            <div>
              <input onChange={inputHandler} value='Same as email' id='Same as email' name='allRadioBtn' type='radio'></input>
              <label htmlFor='Same as email'>Same as email</label>
            </div>
        </fieldset>
        <button className=''>Save</button>
      </form>
    </div>
  );
}

export default App;
