import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../logo.svg";

const UiForm = () => {
  return (
    <div>
      <form>
        <img src={logo} alt="logo" />
        <div class="mb-3">
          <HiUserCircle />
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            <RiLockPasswordFill />
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-check d-flex" className="forgetpassworddiv">
          <div class="rememberCheck">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label  for="exampleCheck1">
              Remember
            </label>
          </div>
          <div >
            <p>Forget password ?</p>
          </div>
        </div>
        <button type="submit" className="submitButton" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UiForm;
