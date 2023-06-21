import { useForm } from "react-hook-form";
import { useState } from "react";
import ShowData from "./components/ShowData";
import "./App.css";

export default function App() {
  const [arrayOfUsers, setArrayOfUsers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const id = Math.floor(Math.random() * 100000);
    const newData = { ...data, id: id };
    console.log(newData);
    setArrayOfUsers([...arrayOfUsers, newData]);
  };
  // console.log(errors);
  return (
    <form className="container d flex row" onSubmit={handleSubmit(onSubmit)}>
      {arrayOfUsers
        ? arrayOfUsers.map((m) => (
            <ShowData key={m.id} firstName={m.firstName} />
          ))
        : ""}
      <input
        className="m-1"
        {...register("firstName", { required: true, maxLength: 20 })}
      />
      <input
        className="m-1"
        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
      />
      <input
        className="m-1"
        type="number"
        {...register("age", { min: 18, max: 99 })}
      />
      <input
        className="m-1"
        {...register("address", { required: true, maxLength: 20 })}
      />
      <input className="m-1 btn btn-success" type="submit" />
    </form>
  );
}
