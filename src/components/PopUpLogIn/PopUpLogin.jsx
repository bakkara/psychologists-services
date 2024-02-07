import { ErrorMessage, Form, Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import icons from '../../img/icons.svg';
import * as Yup from 'yup';
import {
  Button,
  ErrorMsg,
  InputWrapper,
  Label,
  StyledField,
  SvgStyled,
  TextRegistration,
} from '../PopUpRegistration/PopUpRegistration.styled';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const validateSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

const PopUpLogIn = ({ onClose }) => {

  const initialValues = {
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();

  const handleSubmit = async values => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then(console.log('login'))
        .catch(console.error);
    onClose();
  };

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    }
  };

  return (
    <div>
      <TextRegistration>
        Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.
      </TextRegistration>

      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Label>
              <StyledField
                type="email"
                name="email"
                placeholder="Email"
                $hasError={touched.email && errors.email}
                value={values.email}
                required
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </Label>
            <Label>
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

            <Button type="submit" disabled={isSubmitting}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PopUpLogIn;
