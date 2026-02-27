import './App.css'
import { useState } from 'react';

function App() {  

  const [formData,setFormData]=useState({
    text:'',
    checkBox:false,
    radio:'',
    select:''
  });

  const handleChange=(e)=>{

    const {name,value,type,checked}=e.target;
    setFormData({
      ...formData,
      [name]:type==='checkbox'? checked:value
    })

  }

  return (
    <>
    <div className='form-container'>
        <h1>Form</h1>
        <form action="">
          <div className="form-field">
            <label htmlFor="">Text:</label>
            <input 
            type="text" 
            name='text' 
            value={formData.text} 
            onChange={handleChange}/>
          </div>
           <div className="form-field">
           <label htmlFor="">
            <input type="checkbox" checked={formData.checkBox} name='checkBox' onChange={handleChange}/>
            CheckBox
           </label>
          </div>
          <div className="form-field">
           <label htmlFor="">
            Radio
           </label>
           <label htmlFor="">
              <input type='radio' name='radio' value='option1'  checked={formData.radio==='option1'} onChange={handleChange}/>
            Option 1
            </label>
          </div>
          <div className="form-field">
           <label htmlFor="">
            Radio
           </label>
           <label htmlFor="">
              <input type='radio' name='radio' value='option2'  checked={formData.radio==='option2'} onChange={handleChange}/>
            Option 2
            </label>
          </div>
          {/* DROP DOWN */}

        <div className="form-field">
            <label htmlFor="">Select:</label>
            <select name="select" value={formData.select} onChange={handleChange}>
              <option value="">-- Choose an Option --</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
        </div>
        </form>
        <h3>Form Data</h3>
          <div className="form-data">
          <p><strong>Text: </strong> {formData.text || 'N/A'}</p>
          <p><strong>Text: </strong> {formData.checkBox ? 'Checked':'Unchecked'}</p>
          <p><strong>Radio: </strong> {formData.radio || 'N/A'}</p>
          <p><strong>Select: </strong> {formData.select || 'N/A'}</p>
        </div>
    </div>
    </>
  )
}

export default App
