import React, { useState, useEffect } from 'react';


export default function ReactForm01() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: '',
        city: '',
        message: '',
        role: 'none',

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form>

                {/* Name */}
                <lable>Enter your Name: </lable>
                <input type="text" name="username" onChange={handleChange} />
                <br /><br />


                {/* email */}
                <lable>Enter your Email: </lable>
                <input type="email" name="email" onChange={handleChange} />
                <br /><br />


                {/* Age */}
                <lable>Enter your Age: </lable>
                <input type="number" name="age" onChange={handleChange} />
                <br /><br />


                {/* city */}
                <lable>City : </lable>
                <input type="text" name="city" onChange={handleChange} />
                <br /><br />


                {/* Message */}
                <lable>Feedback : </lable>
                <textarea name="message" onChange={handleChange} placeholder='Enter your Feedback'/>
                <br /><br />
                

                {/* select */}
                <lable>Role : </lable>
                <select name="role" onChange={handleChange} >
                    <option value="none">--Select--</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
                <br /><br />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    );
}
