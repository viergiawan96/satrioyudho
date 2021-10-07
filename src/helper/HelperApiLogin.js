import Axios from "axios";

const ApiLogin = ({ email, password }) => {
  return new Promise((resolve) => {
    var datass = JSON.stringify({
      username: email,
      password: password,
      client_id: "e78869f77986684a",
      client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
      grant_type: "password",
    });

    var config = {
      method: "post",
      url: "https://soal.staging.id/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: datass,
    };

    Axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        resolve(error);
      });
  });
};

export { ApiLogin };
