import React, { FormEvent, useRef } from "react";
import { useForm, FieldValues } from "react-hook-form";

const FormCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...(register("name"), { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name?.type === "required" && <p>The name field is required</p>}
        {errors.name?.type === "minLength" && (
          <p>The name must be at least 3</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          {...(register("age"), { required: true })}
          type="number"
          id="name"
          className="form-control"
        />
        {errors.age?.type === "required" && <p>The age field is required</p>}
      </div>
      <button type="submit" className=" btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormCard;
