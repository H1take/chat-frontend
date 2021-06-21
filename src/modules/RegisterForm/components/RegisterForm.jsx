import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, WarningTwoTone } from '@ant-design/icons';

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const RegisterForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const success = false;

    return(
        <div>
            <div className="auth__top">
                <h2>
                    Регистрация
                </h2>
                <p>
                    Для входа в чат, вам нужно зарегистрироваться
                </p>
            </div>
            <Block>
                { 
                 !success ? 
                    <Form
                        className="auth__register-form"
                        name="basic"
                        onSubmit={handleSubmit}
                    >
                        <Form.Item
                            validateStatus={validateField("email", touched, errors)}
                            hasFeedback
                            help={errors.email}
                        >
                            <Input  
                                id="email"
                                placeholder="E-mail"
                                prefix={<MailOutlined />}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                        </Form.Item>

                        <Form.Item
                            validateStatus={validateField("fullname", touched, errors)}
                            hasFeedback
                            help={errors.fullname}
                        >
                            <Input 
                               id="fullname"
                               placeholder="Ваше имя"
                               prefix={<UserOutlined />}
                               value={values.fullname}
                               onChange={handleChange}
                               onBlur={handleBlur}  
                            />
                        </Form.Item>

                        <Form.Item 
                            validateStatus={validateField("confirmPassword", touched, errors)}
                            help={errors.password}
                            hasFeedback
                        >
                            <Input.Password 
                                id="password"
                                value={values.password}
                                placeholder="Пароль" 
                                prefix={<LockOutlined />} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            
                        </Form.Item>

                        <Form.Item 
                            validateStatus={validateField("password", touched, errors)}
                            help={errors.password}
                            hasFeedback
                        >
                            <Input.Password  
                                id="confirmPassword"
                                value={values.password}
                                placeholder="Повторите пароль" 
                                prefix={<LockOutlined />} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                            <Link className="auth__register-link" to="/login">У вас уже есть аккаунт</Link>
                        </Form> 
                        : 
                        <div className="auth__success-block">
                            <div>
                                <WarningTwoTone style={{ fontSize: "50px"}} />
                            </div>
                            <h2>
                                Подтвердите свой аккаунт
                            </h2>
                            <p>
                                На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
                            </p>
                        </div>}    
            </Block>
        </div>
    );
}

export default RegisterForm;