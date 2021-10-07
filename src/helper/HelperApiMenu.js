import Axios from "axios";

const HelperApiMenu = (token) => {
  return new Promise((resolve) => {
    var data = JSON.stringify({
      show_all: "1",
    });

    var config = {
      method: "post",
      url: "https://soal.staging.id/api/menu",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
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

export { HelperApiMenu };
