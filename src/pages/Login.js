import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { ApiLogin } from "../helper/HelperApiLogin";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const HandleLogin = async () => {
    let { email, password } = data;

    const result = await ApiLogin({ email, password });
    if (result.status === 200) {
      let dataResponse = {
        status: result.status,
        data: result.data,
      };
      localStorage.setItem("Auth", JSON.stringify(dataResponse));
      setData({
        email: "",
        password: "",
      });
    }
  };

  const handleChangeForm = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="bg-whitesmoke flex flex-col items-center h-screen">
        <img src={Logo} alt="logo" className="max-w-lg" />

        <form className=" w-full flex flex-col items-center mb-4">
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 opacity-25 text-center">
              Email
            </label>
            <input
              onChange={(value) => handleChangeForm(value)}
              className="input-login  border"
              type="email"
              required
              value={data.email}
              name="email"
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2 opacity-25 text-center">
              Password
            </label>
            <input
              value={data.password}
              onChange={(value) => handleChangeForm(value)}
              className="input-login border"
              type="password"
              required
              name="password"
            />
          </div>
          <button
            onClick={HandleLogin}
            className="bg-white shadow-md text-gray-700 font-bold py-2 rounded-md px-10 
            focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
