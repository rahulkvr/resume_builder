import React, { useEffect, useState, useContext } from 'react';
import DataContext from './GlobalContext';

const ViewResume = () => {
    const data = useContext(DataContext); 

  const [state, setState] = useState({})

  useEffect(() => {
    // setState(() => localStorage)
    console.log(data)
  }, [])

  console.log(state)

  return (
    <div>
    <h1>View Resumes</h1>
    </div>
  )
}

export default ViewResume