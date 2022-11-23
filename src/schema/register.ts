
// ** Third Party Imports
import * as yup from 'yup'

const showErrors = (field: string, valueLen: number, min: number) => {
    if (valueLen === 0) {
        return `${field} field is required`
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`
    } else {
        return ''
    }
}

export default {
    register: yup.object().shape({
        full_name: yup.string().required(),
        // last_name: yup.string().required(),
        email: yup.string().email().required(),
        // phone: yup.string().required(),
        password: yup.string().min(8, (obj: { value: string | any[]; min: number }) => showErrors('password', obj.value.length, obj.min)).required(),
        // confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    })
}
