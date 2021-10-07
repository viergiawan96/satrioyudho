import Axios from "axios";

const HelperApiHome = (token) => {
  return new Promise((resolve) => {
    var config = {
      method: "get",
      url: "https://soal.staging.id/api/home",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    Axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(error);
      });
  });
};

export { HelperApiHome };
