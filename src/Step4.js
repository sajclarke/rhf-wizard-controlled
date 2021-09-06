import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseSauce } from "./rootSlice";

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { sauce } = useSelector((state) => state);

  const { errors, register, handleSubmit } = useForm({
    defaultValues: { sauce },
  });

  const onSubmit = (data) => {
    if (!errors.length > 0) {
      dispatch(chooseSauce(data.sauce));
      history.push("./result");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 4</h2>
      <div>
        <label htmlFor="sauce">Pick Sauce:</label>
        <select id="sauce" name="sauce" ref={register({ required: true })}>
          <option value="">Choose one</option>
          <option value="no_sauce">No Sauce</option>
          <option value="tomato">Tomato</option>
          <option value="spicy_tomato">Spicy Tomato</option>
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
        Complete
      </button>
    </form>
  );
};
