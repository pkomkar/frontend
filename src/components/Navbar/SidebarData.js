import React from "react";
import * as RiIcons from "react-icons/ri";
import dashboard from "../../images/NavImages/dashbord.png";
import products from "../../images/NavImages/products.svg";

const style = { color: "white" };
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <img alt="dashboard" src={dashboard} />,
    // icon: <AiIcons.AiFillHome style={style}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,
  },

  {
    title: "Product",
    path: "#",
    icon: <img alt="product" src={products} />,
    // icon: <FaIcons.FaEnvelopeOpenText style={style} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,

    subNav: [
      {
        title: "Add Product",
        path: "/add-stock",
        icon: <img alt="add-product" src={products} />,
      },
      {
        title: "View Product",
        path: "/view-stock",
        icon: <img alt="view-product" src={products} />,
      },
    ],
  },
];
