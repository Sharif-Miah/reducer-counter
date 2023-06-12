import React, { useState } from "react";

const SmallForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();

   const value = {firstName, lastname, email, password}
    console.log(value);
  };

  return (
    <div className="mt-24 flex justify-center align-middle ">
      <form onSubmit={submit} className="border border-black p-24 shadow-lg">
        <label htmlFor="">Farst Name</label>
        <input
          onBlur={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Type here"
          name="name"
          id="name"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <div>
          <label htmlFor="">Last Name</label>
          <input
            onBlur={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Type here"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Type here"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Type here"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-indigo-600 mt-2 px-5 py-2 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SmallForm;
