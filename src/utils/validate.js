export default ({ isAuth, values, errors }) => {

    const rules = {
        email : (value) => {
            
            if (!value) {
                errors.email = "Введите E-mail адрес";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) 
            {
                errors.email = "Неверный E-mail адрес";
            }
        },

        password : (value) => {
        
            if (!value) {
                errors.password = "Введите пароль";
            } else if (value.length < 6) {
                errors.password = "Пароль должен содержать не менее 6 символов"
            } 
            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(value)) 
            {
                errors.password = isAuth ? "Неверный пароль" : "Слишком легкий пароль"
            }
        },

        confirmPassword : (value) => {

            if (!value) {
                errors.confirmPassword = "Введите пароль";
            } else if (!isAuth && value !== values.password) {
                errors.confirmPassword = "Пароли не совпадают"
            }
        },

        fullname : (value) => {

            if(!isAuth && !value) {
                errors.fullname = "Укажите свое имя и фамилию";
            }
            
        }
    }

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
}
