import React from "react";

const menuList = ({ items }) => {
  const FormatNumber = (nominal) => {
    let reverse = nominal.toString().split("").reverse().join(""),
      result = reverse.match(/\d{1,3}/g);
    result = result.join(".").split("").reverse().join("");

    return result;
  };
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold opacity-75 py-2 px-6">
          {items.category_name}
        </h1>
        {items.menu
          ? items.menu.map((value, index) => (
              <div
                key={index}
                className={`py-4 flex flex-row bg-white border-gray-400 ${
                  index === items.menu.length - 1
                    ? null
                    : "border-b-2 border-dashed"
                }`}
              >
                <img src={value.photo} alt="menu-list" className="w-24" />
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold">{value.name}</h2>
                  <p className="opacity-75">{value.description}</p>
                </div>
                <h1 className="pr-4 flex-1 text-right font-semibold text-xl">
                  {FormatNumber(value.price)}
                </h1>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default menuList;
