import * as Yup from 'yup'

export const YupValidation = Yup.object({
    name:Yup.string().min(3).max(20).required("name mendatory"),
    email:Yup.string().email().required("email mendatory"),
    age:Yup.number().min(10).max(50).required("age mendatory"),
    pass:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Use Strong Password").required(),
    cpass:Yup.string().oneOf([Yup.ref('pass'),null],"Both Password Must match").required()
})