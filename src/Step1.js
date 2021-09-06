import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseBase, resetForm } from "./rootSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { base } = useSelector((state) => state);

  const { reset, errors, register, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { base },
  });

  const handleReset = () => {
    reset();
    dispatch(resetForm());
  };

  const onSubmit = (data) => {
    if (!errors.length > 0) {
      dispatch(chooseBase(data.base));
      history.push("./step2");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <div>
        <label htmlFor="base">Pick base:</label>
        <select id="base" name="base" ref={register({ required: true })}>
          <option value="">Choose one</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      {errors.base && errors.base.type === "required" && (
        <span style={{ display: "block", color: "red", fontSize: "10px" }}>
          Please select an option to continue
        </span>
      )}
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
      <button type="submit">Next</button>
    </form>
  );
};
