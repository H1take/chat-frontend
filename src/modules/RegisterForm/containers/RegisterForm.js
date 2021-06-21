import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";
import validateForm from "utils/validate";


export default withFormik ({

    enableReinitialize: true,

    mapPropsToValues: () => ({
      email: "",
      fullname: "",
      password: "",
      confirmPassword: ""
    }),

    validate: values => {

      let errors = {};

      validateForm({ isAuth: false, values, errors })

      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: "RegisterForm", 
})(RegisterForm);



// --------------------------------------------- brief documentation from me -----------------------------------------

// Custom sync validation
    // 1. Get props with and set them values (name and props.values mapPropsToValues: (props) => ({ email: props.email }))
    // 2. Validation values {
    //  1) Create obj for catch errors
    //  2) Check values to errors
    //  3) Create regexp for check react-form 
    //  4) Return errors if we have those
    // }
    // 3. HandleSubmit 
    // 4. Create displayName
    // 5. mapPropsToValues set default arg for values
    // example:
    // email: "",
    // password: ""
