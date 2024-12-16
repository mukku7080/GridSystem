import React from 'react'
import {useFormik} from 'formik'
import { YupValidation } from './YupValidation'

const Formvalidation = () => {

    const formInitalValue = {
        name:'',
        email:'',
        age:'',
        pass:'',
        cpass:''
    }
 
    const {handleChange,handleBlur,values,handleSubmit,errors,touched} = useFormik({
        initialValues:formInitalValue,
        validationSchema:YupValidation,
        onSubmit: (values ,action)=>{
            console.log(values)

            action.resetForm();

        }
    })

  return (
    <div>
    <h1>Registration Form </h1>
    <br />
    <br />
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name :&nbsp;</label>
            <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />

            {errors.name && touched.name ? <span style={{color:'red'}}>{errors.name}</span>:null}
            <br />
            <br />
            <label htmlFor="">Enter Email :&nbsp;</label>
            <input type="text" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
            {errors.email && touched.email ? <span style={{color:'red'}}>{errors.email}</span>:null}

            <br />
            <br />
            <label htmlFor="">Age :&nbsp;</label>
            <input type="text" name="age" onBlur={handleBlur} onChange={handleChange} value={values.age} />
            {errors.age && touched.age ? <span style={{color:'red'}}>{errors.age}</span>:null}

            <br /><br />
            <label htmlFor="">Password :&nbsp;</label>
            <input type="password" name='pass' onBlur={handleBlur} onChange={handleChange} value={values.pass} />
            {errors.pass && touched.pass ? <span style={{color:'red'}}>{errors.pass}</span>:null}

            <br /><br />
            <label htmlFor="">Confirm password :&nbsp;</label>
            <input type="text" name='cpass' onBlur={handleBlur} onChange={handleChange} value={values.cpass} />
            {errors.cpass && touched.cpass ? <span style={{color:'red'}}>{errors.cpass}</span>:null}

            <br />
            <br />
            <input type="Submit" value='Submit' />
             
        </form>
    </div>
  )
}

export default Formvalidation