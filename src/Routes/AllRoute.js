import { BusTicket } from "../screens/BusTeckets";
import Home from "../screens/Home";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export const screenRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/bus-teckeks",
    component: <BusTicket />,
  },
];
export const headerRoutes = [
  {
    path: "/",
    component: <Home />,
    title: "Home",
    icon: <FaAngleRight />,
  },
  {
    path: "/bus-teckeks",
    component: <BusTicket />,
    title: "Bus Tickets",
    icon: <FaAngleRight />,
  },
  {
    path: "/Indore-To-Bhopal-Bus",
    component: <></>,
    title: "Indore To Bhopal Bus",
  },
];
export const tourRoutes = [
  {
    title: "Indore",
    icon: <MdArrowRightAlt />,
  },
  {
    title: "Bhopal",
    icon: <FaChevronLeft />,
  },
  {
    title: "25 Nov SAT",
    icon: <FaAngleRight />,
  },
];
