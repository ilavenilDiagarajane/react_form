import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function FormFields() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    birthday: "",
    age: "",
    gender: "",
    resume: "",
    avaiabletime: "",
    Urllink: "",
  };

  const validationSchema = yup.object({
    name: yup.string().min(6).max(15).required("fill the name fields"),
    email: yup.string().email().required("fill the email fields"),
    password: yup
      .string()
      .required("fill the password fields ")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .min(8, "Password is too short - should be 8 chars minimum."),

    birthday: yup.date().required("fill the Birthday fields"),
    age: yup.number().min(21).required("fill the age fields"),

    resume: yup
      .mixed()
      .required("A file is required")
      .test("fileFormat", "Upload PDF file format.", (value) => {
        value && ["application/pdf"].includes(value.type);
      }),
    Urllink: yup.string().url().required("fill the github link fields"),
  });

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => console.log(values),
    });
  return (
    <>
      <h1>Different Form Fields in Html</h1>
      <div>
        <form className="form_fields" onSubmit={handleSubmit}>
          <div>
            <input
              className="form_field"
              type="text"
              name="name"
              placeholder="Enter your name"
              values={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.name && touched.name ? errors.name : null}</p>
          </div>
          <div>
            <input
              className="form_field"
              type="email"
              name="email"
              placeholder="Enter your email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.email && touched.email ? errors.email : null}</p>
          </div>
          <div>
            <input
              className="form_field"
              type="password"
              name="password"
              placeholder="Enter your password"
              values={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>
              {errors.password && touched.password ? errors.password : null}
            </p>
          </div>
          <div>
            <input
              className="form_field"
              type="date"
              name="birthday"
              placeholder="Enter your birth date"
              values={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>
              {errors.birthday && touched.birthday ? errors.birthday : null}
            </p>
          </div>
          <div>
            <input
              className="form_field"
              type="number"
              name="age"
              placeholder="Enter your Age"
              values={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.age && touched.age ? errors.age : null}</p>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Female
          </div>

          {errors.gender && touched.gender ? errors.gender : null}
          <div>
            <label>Upload Resume :</label>
            <input
              type="file"
              name="resume"
              values={values.resume}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{errors.resume && touched.resume ? errors.resume : null}</p>
          </div>

          <div>
            <label>Avaiable Time : </label>
            <input
              className="form_field"
              type="time"
              name="avaiabletime"
              values={values.avaiabletime}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label>GitHub Link : </label>
            <input
              className="form_field"
              type="url"
              name="Urllink"
              values={values.Urllink}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p> {errors.Urllink && touched.Urllink ? errors.Urllink : null}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormFields;
