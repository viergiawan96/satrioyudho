import React, { useEffect, useState } from "react";
import MenuList from "../component/MenuList";
import { HelperApiMenu } from "../helper/HelperApiMenu";

const Menu = () => {
  const dataUser = localStorage.getItem("Auth");
  const [listMenu, setListMenu] = useState();

  const handleListMenu = async () => {
    const token = JSON.parse(dataUser);
    try {
      const result = await HelperApiMenu(token.data.access_token);
      if (result.status === 200) {
        const data = result.data.result;
        console.log(data);
        setListMenu(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleListMenu();
  }, []);

  return (
    <>
      <div className=" flex flex-col bg-white pb-4 fixed max-w-screen-md z-20 w-full">
        <h1 className="text-gray-700 text-center text-xl md:text-3xl uppercase font-semibold">
          menu
        </h1>
        <div className="text-gray-700 flex flex-row md:text-xl text-lg font-semibold ml-6 md:pt-10 pt-4">
          <h4 className="flex-1">Seasonal Product</h4>
          <h4 className="flex-1 opacity-75">Best Seller</h4>
          <h4 className="flex-1 opacity-75">Coffee</h4>
        </div>
      </div>
      <div className="py-32 flex flex-col">
        {listMenu
          ? listMenu.categories.map((items, index) => (
              <MenuList key={index} items={items} />
            ))
          : null}
      </div>
    </>
  );
};

export default Menu;
