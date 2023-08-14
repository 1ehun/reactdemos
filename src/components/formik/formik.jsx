import React from "react";
import { Formik,Form,Field} from 'formik'

function validateEmail(value) {
    if (!value) {
        return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
}

function validatePassword(value) {
    if (!value) {
        return 'Required';
    }
}

export const FormikDemo = () => {
    return(
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={values => {
                console.log('submit', values);
            }}
        >
            {/* объект errors содержит свойства которые совпадают с именами наших полей - name='email' и name='password'
            обратим внимание что эти элементы должны совпадать с начальными значениями в initialValues, Formik опирается на эти значения
            Field - аналог input-a
            значения будут автоматически попадать в errors, touched
            touched - это касание, туда будет попадать факт взаимодействия с формой*/}
            {({ errors, touched}) => (
                <Form>
                    <label>Электронная Почта</label>
                    <Field
                    name="email"
                    validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                        <div>{errors.email}</div>
                    )}
                    <label>Пароль</label>
                    <Field
                        name="password"
                        type="password"
                        validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                        <div>{errors.password}</div>
                    )}

                    <button
                    type="submit"
                    >
                        Отправить
                    </button>

                </Form>
            )}
        </Formik>
    )
}

export default FormikDemo