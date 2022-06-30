import React, { Fragment, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../query/login/login";
import { useUserStore } from "../store";

const Login = ({ ...props }) => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [loginPost, { data, loading, error, }] = useMutation(LOGIN);

  useEffect(() => {
    if (data) {
      setUser(data.login.jwt, data.login.user)
    }

    return () => {

    };
  }, [data]);

  useEffect(() => {
    if (user.email.length > 5) {
      navigation("/live-orders");
    }
    return () => {};
  }, [user]);
  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginPost({
      variables: { email: formData.email, password: formData.password },
    });
  };

  return (
    <Fragment>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="/">HMS</a>
            </div>
            <div className="mt-4">
              <ul className="flex">
                <li>
                  <Link to="/live-orders" className="underline">
                    Live orders
                  </Link>
                </li>
              </ul>
            </div>
            {/* <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for
            your digital products, while leaving the UI design on us!
          </p> */}
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-primary">
              Account Login
            </h3>
            <form
              onSubmit={(e) => onSubmit(e)}
              className="flex flex-col space-y-5"
            >
              <InputData
                id={"email"}
                label={"Email"}
                onChange={onChange}
                value={formData.email}
                type={"email"}
              />
              <InputData
                id={"password"}
                label={"Password"}
                onChange={onChange}
                value={formData.password}
                type={"password"}
              />

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-md shadow hover:opacity-80 "
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </Fragment>
  );
};

export default Login;

export const InputData = ({ id, onChange, type, label, value }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="email" className="text-sm font-semibold text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={(e) => onChange(e)}
        value={value}
        // autoFocus={type === "email"}
        className="px-4 py-2 transition duration-300 border border-gray-300 rounded "
      />
    </div>
  );
};
