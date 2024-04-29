import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const onSubmit = (e, actions) => {
    dispatch(
      addContact({
        name: e.name,
        number: e.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div>
          {" "}
          <label htmlFor={nameFieldId} className={style.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <span className={style.validation}>
            <ErrorMessage name="name" as="span" className={style.validation} />
          </span>
        </div>
        <div>
          {" "}
          <label htmlFor={numberFieldId} className={style.label}>
            Number
          </label>
          <Field type="text" name="number" id={numberFieldId}></Field>
          <span className={style.validation}>
            <ErrorMessage name="number" className={style.validation} />
          </span>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
