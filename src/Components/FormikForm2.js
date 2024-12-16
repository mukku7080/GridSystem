import React, { useState } from 'react'
import { Formik, Form, Field ,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const FormikForm2 = () => {

  const validation = Yup.object({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().required(),
    age:Yup.number().min(18).max(50).required(),
    pass:Yup.string().min(8).required()
    
  });
  const [formData,setFormdata]= useState({});

  return (
    <div>
      <h1>Registeration Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          pass: '',
          Gender: '',
          country: ''

        }}
        validationSchema={validation}
        onSubmit={(values)=>{
          console.log(values)
          setFormdata(values)
        }}
       
      >
        <Form>
          <label htmlFor="">Enter Name :</label>
          <Field type='text' name='name'></Field>
          <br />
          <ErrorMessage name='name'/>
          <br />
          <br />
          <label htmlFor="">Enter Email :</label>
          <Field type='text' name='email'></Field>
          <br />
          <ErrorMessage name='email'/>
          <br />
          <label htmlFor="">Enter Age :</label>
          <Field type='text' name='age'></Field>
          <br />
          <ErrorMessage name='age'/>
          <br />
          <label htmlFor="">Enter Password :</label>
          <Field type='text' name='pass'></Field>
          <ErrorMessage name='pass'/>

          <br />
          <br />
          <label htmlFor="">Gender :</label>
          <label htmlFor="">&nbsp;Male :</label>
          <Field type='radio' name='Gender' value='Male'></Field>&nbsp;
          <label htmlFor="">&nbsp;Female :</label>
          <Field type='radio' name='Gender' value='Female'></Field>
          <br />
          <br />
          <label htmlFor="">Country</label>
          <Field as='select' name='country'>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Usa">Usa</option>
            <option value="Aus">Austrailiya</option>
          </Field>
          <br />
          <br />
          <button type='Submit'>Submit</button>
        </Form>
      </Formik>

    </div>
  )
}

export default FormikForm2