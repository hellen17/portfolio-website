import { useState } from 'react';
import axios from 'axios';

export default function Form(){

    const [formData, setFormData] = useState({
        "records": [
            {
                "fields" : {
                    "name" : '',
                    "email" : '',
                    "message" : ''
                }
            }
        ]
    })
    console.log(formData);

    const {fname, email, message} = formData.records[0].fields;

    function handleChange(e){
        const {name, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            records: [
                {
                    fields: {
                        ...prevState.records[0].fields,
                        [name]: value
                    }
                }
            ]

        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log('Form submitted');
        try {
            const response = await axios.post('https://api.airtable.com/v0/appm1rsvExrqtPNUp/Portfolio', formData, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                alert('Thanks for reaching out. I will get back to you soon.')
                console.log(response)
                  // Reset the form
                  setFormData({
                    "records": [
                        {
                            "fields" : {
                                "name" : '',
                                "email" : '',
                                "message" : ''
                            }
                        }
                    ]
                  });

            }
        } catch (error) {
            alert('Failed to send message. Please try again.')
            console.log(error.response)
        }

    }

    return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
        <input type="text" placeholder="Name" name='name' value={fname} className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} onChange={handleChange}  />
        <input type="email" placeholder="Email" name='email' value={email} className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} onChange={handleChange} />
        <textarea placeholder="Message" name='message' value={message} className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} onChange={handleChange} />
        <button className="p-2 rounded-md w-1/3" style={{ backgroundColor: 'var(--primary-color)' }}>Send</button>
    </form>
    )
 
}