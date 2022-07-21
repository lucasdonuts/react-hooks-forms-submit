import React, { useState } from "react";

function Form() {
  const [submittedData, setSubmittedData] = useState( [] );
  const [errors, setErrors] = useState( [] );
  const [ formData, setFormData] = useState( {
    firstName: 'Sylvia',
    lastName: 'Woods'
  } );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( formData.firstName.length > 0 && formData.lastName.length > 0 ) {
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFormData({
        firstName: '',
        lastName: ''
      })
    } else {
      setErrors([ 'First and Last name required' ]);
    }
  }

  const listOfSubmissions = submittedData.map( (data, index) => {
    return (
      <div key={ index }>
        { data.firstName } { data.lastName }
      </div>
    );
  })

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="firstName" onChange={ handleChange } value={ formData.firstName } />
        <input type="text" name="lastName" onChange={ handleChange } value={ formData.lastName } />
        <button type="submit">Submit</button>
      </form>
      { errors.length > 0
        ? errors.map(( error, index ) => (
            <p key={ index } style={{ color: 'red' }}>
              { error }
            </p>
          ))
        : null
      }
      <h3>Submissions</h3>
      { listOfSubmissions }
    </div>
  );
}

export default Form;
