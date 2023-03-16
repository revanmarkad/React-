import React, { useState } from 'react'


function Char() {

    const [text, setText] = useState("")
    const [alt, setAlt] = useState(null)


    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.value.length > 100) {

            setAlt(" Sorry Text Limit is 100")

        } else {
            setText(e.target.value)

            setAlt(null)
        }
    }
    return (

        <div >

            <input type="text"
                className='InputBox'
                onChange={handleChange}
                placeholder='Enter Something..........'
                value={text}
            />



            <span>{alt && alt}</span>
        </div>

    )
}

export default Char