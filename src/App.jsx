import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import ShowData from "./components/ShowData";
import * as yup from "yup";
import "./App.css";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    address: yup.string().required(),
  })
  .required();

export default function App() {
  const [arrayOfUsers, setArrayOfUsers] = useState([]);
  const [actualUser, setActualUser] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const id = Math.floor(Math.random() * 100000);
    const newData = { ...data, id: id };
    console.log(newData);
    setArrayOfUsers([...arrayOfUsers, newData]);
    document.getElementById("form").reset(); // reset form
    setActualUser({});
  };
  ////
  console.log(errors);
  return (
    <form
      id="form"
      className="container d flex row"
      onSubmit={handleSubmit(onSubmit)}
    >
      {arrayOfUsers
        ? arrayOfUsers.map((m) => (
            <ShowData
              key={m.id}
              id={m.id}
              firstName={m.firstName}
              lastName={m.lastName}
              age={m.age}
              address={m.address}
              setActualUser={setActualUser}
            />
          ))
        : ""}
      <input className="m-1" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      <input className="m-1" {...register("lastName")} />
      <p>{errors.lastName?.message}</p>
      <input className="m-1" {...register("age")} />
      <p>{errors.age?"age invalid":""}</p>
      <input className="m-1" {...register("address")} />
      <p>{errors.address?.message}</p>
      <input className="m-1 btn btn-success" type="submit" />
    </form>
  );
}
