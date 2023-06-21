import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";
import ShowData from "./components/ShowData";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {arrayOfUsers
        ? arrayOfUsers.map((m) => (
            <ShowData key={m.id} firstName={m.firstName} />
          ))
        : ""}
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
