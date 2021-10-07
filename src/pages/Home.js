import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Motif from "../assets/motif.png";
import { createBrowserHistory as history } from "history";
import { HelperApiHome } from "../helper/HelperApiHome";

const Home = () => {
  const dataUser = localStorage.getItem("Auth");
  const [userResponse, setUserResponse] = useState();

  const handleDataUser = async () => {
    try {
      let token = JSON.parse(dataUser);

      const result = await HelperApiHome(token.data.access_token);
      if (result.status === 200) {
        setUserResponse(result.data.result);
      }
    } catch (error) {
      localStorage.removeItem("Auth");
      history.push("/");
    }
  };

  useEffect(() => {
    handleDataUser();
    // eslint-disable-next-line
  }, []);

  const FormatNumber = (nominal) => {
    let reverse = nominal.toString().split("").reverse().join(""),
      result = reverse.match(/\d{1,3}/g);
    result = result.join(".").split("").reverse().join("");

    return result;
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <img src={Logo} alt="logo" className="max-w-xs pl-4 " />

        <div style={{ backgroundImage: `url(${Motif})` }}>
          <div className="flex flex-col bg-white w-10/12 mx-auto rounded-lg shadow-md my-10 px-8 py-4">
            <div className=" flex flex-col">
              <h1 className="text-xl font-normal">Good Afternoon,</h1>
              <h1 className="text-2xl font-semibold">
                {userResponse ? userResponse.name : null}
              </h1>
            </div>
            <div className="flex flex-row mt-6">
              <div className="border-r-2 border-dashed border-gray-400 pr-8 cursor-pointer">
                <div className="bg-white shadow-md flex justify-center rounded-full">
                  <img
                    className="w-20 px-4 py-4"
                    src={
                      "https://chart.googleapis.com/chart?chl=9329714849635&chs=250x250&cht=qr&chld=H%7C0"
                    }
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center  text-center justify-center text-lg font-semibold opacity-75 pl-4">
                <span>Saldo</span>
                <span>Points</span>
              </div>
              <div
                className="flex-1 flex flex-col text-right  justify-center 
              text-lg font-semibold opacity-75"
              >
                <span>
                  {userResponse
                    ? `Rp ${FormatNumber(userResponse.saldo)}`
                    : null}
                </span>
                <span className="text-green-500">
                  {userResponse ? FormatNumber(userResponse.point) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
