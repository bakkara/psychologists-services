import { ErrorMessage, Form, Formik } from 'formik'
import icons from '../../img/icons.svg';
import * as Yup from 'yup';
import { Button, ErrorMsg, InputWrapper, Label, StyledField, SvgStyled } from './PopUpRegistration.styled';
import { useState } from 'react';

export const validateSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});


const PopUpRegistration = ({ onClose }) => {
    const initialValues = {
        email: '',
        password: '',
        repeatPassword: '',
      };
      const [showPassword, setShowPassword] = useState(false);
      const [repeatShowPassword, setRepeatShowPassword] = useState(false);


      const handleSubmit = async values => {
        if (values.password !== values.repeatPassword) {
            console.log("no repeat")
          } else {
            console.log("repeat")
          }
          onClose()
      }
      const togglePasswordVisibility = field => {
        if (field === 'password') {
          setShowPassword(!showPassword);
        } else if (field === 'repeatPassword') {
          setRepeatShowPassword(!repeatShowPassword);
        }
      };

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
    >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Label>Enter your email</Label>
            <StyledField
              type="email"
              name="email"
              placeholder="E-mail"
              $hasError={touched.email && errors.email}
              value={values.email}
              required
            />
            <ErrorMessage name="email" component={ErrorMsg} />

            <Label>
              Enter your password
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  $hasError={touched.password && errors.password}
                  value={values.password}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('password')}
                >
                  <use
                    href={`${icons}#${
                      showPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="password" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Label>
              Repeat password
              <InputWrapper>
                <StyledField
                  type={repeatShowPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  placeholder="Repeat password"
                  $hasError={touched.repeatPassword && errors.repeatPassword}
                  value={values.repeatPassword}
                  required
                />
                <SvgStyled
                  height="16"
                  width="16"
                  onClick={() => togglePasswordVisibility('repeatPassword')}
                >
                  <use
                    href={`${icons}#${
                      showPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  ></use>
                </SvgStyled>
                <ErrorMessage name="repeatPassword" component={ErrorMsg} />
              </InputWrapper>
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )} 
    </Formik>
  )
}

export default PopUpRegistration
