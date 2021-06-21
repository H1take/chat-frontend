import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { Button, Block } from "components";
import { validateField } from "utils/helpers";


const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return(
        <div>
            <div className="auth__top">
                <h2>
                    Войти в аккаунт
                </h2>
                <p>
                    Пожалуйста, войдите в свой аккаунт
                </p>
            </div>
            <Block> 
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
                            validateStatus={validateField("password", touched, errors)}
                            hasFeedback
                            help={errors.password}
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                            <Link className="auth__register-link" to="/register">
                                Зарегистрироваться
                            </Link> 
                    </Form>    
            </Block>
        </div>
    );
}

export default LoginForm;