import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCheese } from "./rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cheese } = useSelector((state) => state);

  const { errors, register, handleSubmit } = useForm({
    defaultValues: { cheese },
  });

  const onSubmit = (data) => {
    if (!errors.length > 0) {
      dispatch(chooseCheese(data.crust));
      history.push("./step4");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 3</h2>
      <div>
        <label htmlFor="cheese">Pick cheese:</label>
        <select id="cheese" name="cheese" ref={register({ required: true })}>
          <option value="">Choose one</option>
          <option value="no_cheese">No Cheese</option>
          <option value="mozarella">Mozarella</option>
          <option value="parmigiano">Parmigiano</option>
        </select>
      </div>
      {errors.cheese && errors.cheese.type === "required" && (
        <span style={{ display: "block", color: "red", fontSize: "10px" }}>
          Please select an option to continue
        </span>
      )}
      <button type="button" onClick={() => history.goBack()}>
        Prev
      </button>
      <button type="submit" disabled={errors?.length > 0}>
        Next
      </button>
    </form>
  );
};
