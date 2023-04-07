import React, { FormEvent, useRef } from "react";

const FormCard = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  let person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) {
      person.name = nameRef.current?.value ?? " ";
    }
    if (ageRef.current) {
      person.age = parseInt(ageRef.current?.value ?? "0");
    }
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input ref={ageRef} type="number" id="name" className="form-control" />
      </div>
      <button type="submit" className=" btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormCard;
