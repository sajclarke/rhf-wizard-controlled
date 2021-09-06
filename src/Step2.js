import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCrust } from "./rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { crust } = useSelector((state) => state);

  const { errors, register, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { crust },
  });

  const onSubmit = (data) => {
    if (!errors.length > 0) {
      dispatch(chooseCrust(data.crust));
      history.push("./step3");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <div>
        <label htmlFor="crust">Pick crust:</label>
        <select id="crust" name="crust" ref={register({ required: true })}>
          <option value="">Choose one</option>
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
        </select>
      </div>
      {errors.crust && errors.crust.type === "required" && (
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
