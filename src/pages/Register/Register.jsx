import {React,useContext} from 'react'
import './Register.css';

import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Form/Button/Button';
import { requiredValidator, minValidator, maxValidator, emailValidator } from '../../Validators/rules';
import { useForm } from '../../hooks/UseForm';
import AuthContext from '../../Context/authContext';
import Swal from 'sweetalert2'

export default function register() {


    const authContext = useContext(AuthContext);
    console.log(authContext);

    const [formState, onInputHandler] = useForm({
        firstname: {
            value: '',
            isValid: false
        },
        lastname: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)


    console.log(formState);
    console.log(formState.isFormValid);

    const registerNewUser = (event) => {
        event.preventDefault();


        const newUserInfo = {
            firstname: formState.inputs.firstname.value,
            lastname: formState.inputs.lastname.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
        }

        console.log(newUserInfo);

        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserInfo),
        }).then((res) => {

            if (res.status === 201) {
                return res.json();
            }
        }).then((result) => {
            authContext.login(result,result.id);
          
            console.log(result);
            Swal.fire({
                title: "ثبت نام شما با موفقیت انجام شد",
                icon: "success",
                button: "ok"
            });


        });

    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="login-header">
                    <div className="container">
                        <div className="row margin-right alignItemsJustify">



                            <div className="col-12 col-sm-6 col-xl-4">
                                <div className="login__wrapper">
                                    <h2 className="login__title">ثبت نام</h2>

                                    <form action="" className="login__form">
                                        <div className="login__form__item">
                                            <label ></label>
                                            <Input element='input' type='text' id="firstname" className="firstname" placeholder="نام" validations={
                                                [requiredValidator(),
                                                minValidator(4),
                                                maxValidator(12),
                                                ]
                                            }
                                                onInputHandler={onInputHandler} />
                                        </div>
                                        <div className="login__form__item">
                                            <label ></label>
                                            <Input element='input' type="text" id="lastname" className="lastname" placeholder="نام خانوادگی"
                                                validations={[
                                                    requiredValidator(),
                                                    minValidator(5),
                                                    maxValidator(20)
                                                ]} onInputHandler={onInputHandler} />
                                        </div>
                                        <div className="login__form__item">
                                            <label ></label>
                                            <Input element='input' type="text" id="email" className="email" placeholder="ایمیل"
                                                validations={
                                                    [
                                                        requiredValidator(),
                                                        emailValidator()
                                                    ]
                                                }
                                                onInputHandler={onInputHandler} />
                                        </div>
                                        <div className="login__form__item">
                                            <label ></label>
                                            <Input element='input' type="password" id="password" className="password" placeholder="رمز عبور"
                                                validations={
                                                    [requiredValidator(),
                                                    minValidator(8),
                                                    maxValidator(12)
                                                    ]
                                                }

                                                onInputHandler={onInputHandler} />
                                        </div>
                                        <Button type='submit' disabled={!formState.isFormValid} className="btn__link register__form__btn" onClick={registerNewUser} >ثبت نام</Button>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    )
}
