import React, { useState } from "react";
import { Formik } from "formik";

import styles from "./baseInfo.module.scss";
import InputField from "../inputField/InputField";

const activityOptions = [
  "Basal Metabolic Rate (BMR)",
  "Sedentary: little or no exercise",
  "Light: exercise 1-3 times/week",
  "Moderate: exercise 4-5 times/week",
  "Active: daily exercise or intense exercise 3-4 times/week",
  "Very Active: intense exercise 6-7 times/week",
  "Extra Active: very intense exercise daily, or physical job",
];

const genderOptions = ["Male", "Female"];

const goalOptions = ["Loose weight/fat", "Gain muscles"];

function BaseInfo() {
  return (
    <div className={styles.container}>
      <h1 style={{ marginTop: "1.2rem" }}>
        Personalized Workout Plan Generator
      </h1>
      <Formik
        initialValues={{
          age: 0,
          gender: genderOptions[0],
          activity: activityOptions[0],
          desiredWorkoutDuration: 0,
          goal: goalOptions[0],
        }}
        validate={(values) => {
          const errors = {};
          if (!values.age || values.age <= 0) {
            errors.age = "Please set an appropriate age";
          }
          if (
            !values.desiredWorkoutDuration ||
            values.desiredWorkoutDuration <= 0
          ) {
            errors.desiredWorkoutDuration =
              "Please set an appropriate workout duration";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.formContainer}>
              <InputField
                name="age"
                type="number"
                label="Age"
                value={values.age}
                onChange={handleChange}
                isError={errors.age && touched.age && errors.age}
              />
              <InputField
                name="gender"
                type="select"
                options={genderOptions}
                label="Gender"
                value={values.gender}
                onChange={handleChange}
                isError={errors.gender && touched.gender && errors.gender}
                // disabled={true} /
              />
              <InputField
                name="activity"
                type="select"
                options={activityOptions}
                label="Activity"
                value={values.activity}
                onChange={handleChange}
                isError={errors.activity && touched.activity && errors.activity}
              />
              <InputField
                name="desiredWorkoutDuration"
                type="number"
                label="Desired Workout Duration(in Mins)"
                value={values.desiredWorkoutDuration}
                onChange={handleChange}
                isError={
                  errors.desiredWorkoutDuration &&
                  touched.desiredWorkoutDuration &&
                  errors.desiredWorkoutDuration
                }
              />
              <InputField
                name="goal"
                type="select"
                options={goalOptions}
                label="Goal"
                value={values.goal}
                onChange={handleChange}
                isError={errors.goal && touched.goal && errors.goal}
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="submitBtn">
              Next
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default BaseInfo;
