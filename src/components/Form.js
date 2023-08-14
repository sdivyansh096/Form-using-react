import React, { useState } from 'react'

function Form() {
    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"india",
        streetAddress:"",
        city:"",
        state:"",
        zipCode:"",
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications : ""

    });
    // console.log(formData);

    function changeHandler(event){
        const {name, type, value, checked} = event.target;
        setFormData(prevState=>{
            return({
                ...prevState,
                [name] : type === 'checkbox' ? checked : value
            })
        });
    }
    function submitHandler(event){
       event.preventDefault();
        console.log(formData);
        let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        alert(data);
    }
  return (
    <form
  className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md"
    action=''
    onSubmit={submitHandler}
    >       
     {/* firstName */}
        <div>
        <label
     htmlFor='firstName'
     className='font-medium text-sm'>First Name</label>
      <input
      type='text'
      placeholder='Divyansh'
      name='firstName'
      id='firstName'
      onChange={changeHandler}
      value={formData.firstName}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      /> 
      </div> 
      <br/>
      {/* lastName */}
    <div>
    <label
     className='font-medium text-sm'
     htmlFor='lastName'>Last Name</label>
     <input
      type='text'
      placeholder='sharma'
      name='lastName'
      id='lastName'
      onChange={changeHandler}
      value={formData.lastName}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      /> 
      </div>
      <br/>
      {/* Email */}

    <div>
    <label
     htmlFor=''
     className='font-medium text-sm'>Email</label>
       <input
      type='email'
      placeholder='email'
      name='email'
      id='email'
      onChange={changeHandler}
      value={formData.email}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      />
      </div>  
      <br/>

      {/* Country */}
      <div>
        <label
        htmlFor='country'
        className='font-medium text-sm'>Country: </label>
        <select
        name='country'
        id='country'
        onChange={changeHandler}
        value={formData.country}
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
        required
        >
        <option value="india">India</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">United States</option>
        </select>
    </div>
     {/* Address */}
     <br/>
    <div>
        <label
        htmlFor='streetAddress'
        className='font-medium text-sm'
        >Street Address</label>
        <textarea
        placeholder='123 Main st'
        name='streetAddress'
        id='streetAddress'
        onChange={changeHandler}
        value={formData.streetAddress}
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
        required
        >

        </textarea>
     <br/>
    </div>

    {/* city */}

    <label
    htmlFor='city'
    className='font-medium text-sm'>City Name</label>

    <input
      type='text'
      placeholder='Ambala'
      name='city'
      id='city'
      onChange={changeHandler}
      value={formData.city}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      /> 
      <br/>

      {/* state */}

      <div>
      <label
     htmlFor='state'
     className='font-medium text-sm'>State</label>
     <input
      type='text'
      placeholder='Haryana'
      name='state'
      id='state'
      onChange={changeHandler}
      value={formData.state}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      /> 
      </div>
    <br/>

    {/* zipCode */}

    <div>
    <label
     htmlFor='zipCode'
     className='font-medium text-sm'>ZIP/ Postal Code</label>
     <input
      type='number'
      placeholder='134203'
      name='zipCode'
      id='zipCode'
      onChange={changeHandler}
      value={formData.zipCode}
      className='w-full border border-blue-400 rounded-md p-2 mt-2'
      required
      />   
    </div>
    <div className='mb-4'>
            {/* fieldset and legend */}
     <label className='font-medium text-sm'>By Email</label>

     <div className='flex items-start gap-4 mt-2'>
     <div>
     <input
        type="checkbox" 
        id='comments'
        name='comments'
        onChange={changeHandler}
        checked={formData.comments}
        className='w-4 h-4 mt-[6px]'
        value={formData.comments}
        />
     </div>
        <div>
        <label htmlFor="comments"  className='font-medium text-sm'>Comments</label>
        <p className='text-sm text-gray-500'>Get notified when someones posts a comment on a posting.</p>
        </div>
     </div>

        <div className='flex items-start gap-4 mt-2'>
        <div>
        <input 
        type="checkbox" 
        id='candidates'
        name='candidates'
        onChange={changeHandler}
        checked={formData.candidates}
        className='w-4 h-4 mt-[6px]'
        />
         </div>
        <div>
        <label htmlFor="candidates" className='font-medium text-sm'>Candidates</label>
        <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job.</p>
        </div>
        </div>

      <div className='flex items-start gap-4 mt-2'>
      <div>
        <input 
        type="checkbox" 
        id='offers'
        name='offers'
        onChange={changeHandler}
        checked={formData.offers}
        className='w-4 h-4 mt-[6px]'
        />
      </div>
      <div>
        <label htmlFor="offers" className='font-medium text-sm'>Offers</label>
        <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>
        </div>
    {/* push notification - radio */}
    <div className='mb-4'>
            <label className='font-medium text-sm'>Push Notifications</label>
            <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio1'
                name="pushNotifications" 
                value="everything"
                onChange={changeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio1"  className='font-medium text-sm'>Everything</label>
            </div>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio2'
                name="pushNotifications" 
                value="Same as email"
                onChange={changeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio2"  className='font-medium text-sm'>Same as email</label>
            </div>

           <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio3'
                name="pushNotifications" 
                value="No push notifications"
                onChange={changeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio3"  className='font-medium text-sm'>No push notifications</label>
            </div>
        </div>  
        {/* submit button */}
        <button className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200' 
        type='submit'>
            Save
        </button>

    </form>
  )
}

export default Form