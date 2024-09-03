import React, { useContext, useState } from 'react'
import './Login.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Form/Button/Button';
import { requiredValidator, minValidator, maxValidator, emailValidator } from '../../Validators/rules';
import { useForm } from '../../hooks/UseForm';
import AuthContext from '../../Context/authContext';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";



export default function Login() {

  const authContext = useContext(AuthContext);


  const [formState, onInputHandler] = useForm({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false
    }

  }, false)

  const [usersArray, setUsersArray] = useState([]);
  const [newUser, setNewUser] = useState(null);
  const [isGoogleRrcaptchaVreify, setIsGoogleRecaptchaVreify] = useState(false);

  console.log(formState.isFormValid);
  console.log(formState);

  const registerNewUser = (event) => {
    event.preventDefault();
    console.log('register');
  }

  const loginUser = (event) => {
    event.preventDefault();
    const userData = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value
    }
    fetch(`http://localhost:3000/users`).then((res) => res.json())
      .then((users) => {
        setUsersArray(users);
        console.log(usersArray);


        let result = [];

        let mainUser = users.filter(user => {
          return user.email === userData.email
        });
        if (mainUser.length) {
          if (mainUser[0].password === userData.password) {
            result.push(mainUser[0]);
          }
        }
        else{
          Swal.fire({
            title: "کاربری با این اطلاعات وجود ندارد:",
            icon: "error",
            button: "oops"
          });
        }
        if (result.length) {
          Swal.fire({
            title: "شما با موفقیت لاگین شدید.",
            icon: "success",
            button: "ok"
          });
          authContext.login({}, result[0].id)
        }
        else {
          Swal.fire({
            title: "لطفا مقادیر را به درستی وارد کنید:",
            icon: "warning",
            button: "oops"
          });
        }
      });

  }


  const onChangeHandler = () => {
    console.log('google recaptcha');
    setIsGoogleRecaptchaVreify(true);
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
                  <h2 className="login__title">عضویت در سایت</h2>

                  <form action="" className="login__form">
                    <div className="login__form__item">
                      <label ></label>
                      <Input element='input' type='text' id="email" className='email' placeholder="ایمیل"
                        validations={[
                          requiredValidator(),
                          minValidator(8),
                          maxValidator(30),
                          emailValidator()
                        ]}
                        onInputHandler={onInputHandler}
                      />
                    </div>
                    <div className="login__form__item">
                      <label></label>
                      <Input element='input' type="text" name="" id="password" className="password" placeholder="رمز عبور"
                        validations={
                          [
                            requiredValidator(),
                            minValidator(8),
                            maxValidator(12)
                          ]
                        }
                        onInputHandler={onInputHandler}
                      />
                    </div>
                    <div className="login__form__item">
                      <ReCAPTCHA
                        sitekey="6Ld0QikqAAAAAOptz-g2w36cnp9qJCM37ZqBzKAg"
                        onChange={onChangeHandler}
                      />
                    </div>


                    <Button type="submit" className='btn__link login__form__btn' onClick={loginUser} disabled={(!formState.isFormValid || !isGoogleRrcaptchaVreify)} > عضویت</Button>

                    <Button to="/register" className='btn__link register__form__btn'  >ثبت نام</Button>
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
