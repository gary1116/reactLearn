import { useState } from 'react'
import './App.css'

function App() {

    const [formData, setFormData] = useState({
        text: "",
        checkBox: false,
        radio: '',
        select: ''
    })

    const handleChange=(e)=>{

        const {name, value, type, checked} = e.target;
        setFormData(prevData=>{
            return {
                ...prevData,
                [name]:type === 'checkbox' ? checked : value
            }
        })

    }

    return (
        <>
            <div className="form-container">
                <h1>Form using States</h1>
                <form>
                    <div className="form-field">
                        <label>Text:- </label>
                        <input
                        name="text"
                        type="text"
                        value={formData.text}
                        onChange={handleChange}/>
                    </div>
                    <div className="form-field">
                        <label>Checkbox:- </label>
                        <input name="checkBox"
                        type="checkbox"
                        checked={formData.checkBox}
                        onChange={(e)=>handleChange(e)} />
                    </div>

                    <div className="form-field" id="radio">
                        <label>Radio:- </label>
                        <h3>Option 1</h3>
                        <input  type="radio"
                        name="radio"
                        value="option1"
                        checked={formData.radio === 'option1'}
                        onChange={(e)=>handleChange(e)}/>
                        <h3>Option 2</h3>
                        <input  type="radio"
                        name="radio"
                        value="option2"
                        checked={formData.radio === 'option2'}
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="form-field">
                        <label>Select:- </label>
                        <select
                            name="select"
                            value={formData.select}
                            onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div>


                <div className="form-data">
                    <h2>Form Data:</h2>
                    <p>Text: {formData.text}</p>
                    <p>Checkbox: {formData.checkBox ? 'Checked' : 'Unchecked'}</p>
                    <p>Radio: {formData.radio}</p>
                    <p>Select: {formData.select}</p>
                </div>
                </form>
            </div>

        </>
    )

}

export default App
