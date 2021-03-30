import React from 'react';
import DataContext from './GlobalContext';

const initialState = {
    userName: "",
    email: "",
    address: "",
    phone: ""
}


const AboutSelf = () => {

const [aboutState, setAboutState] = React.useState(initialState);

    const handleChange = e => {

        const { name, value } = e.target

        setAboutState({
            ...aboutState,
            [name]: value 
        })
        console.log(aboutState)
    }

    return(
        <div>
           <h1>About Self</h1>
                 <label>Name </label>
                 <input type="text" name="userName" id="userName" onChange={handleChange}/>
                 <label>Email </label>
                 <input type="email" name="email" id="email" onChange={handleChange}/> 
                 <label>Address </label>
                 <input type="text" name="address" id="address" onChange={handleChange}/>
                 <label>Phone </label>
                 <input type="text" name="phone" id="phone" onChange={handleChange}/>
                 <DataContext.Provider value={aboutState} />
        </div>
    )
    
}


export default AboutSelf;