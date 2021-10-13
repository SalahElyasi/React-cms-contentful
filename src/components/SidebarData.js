import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <MdIcons.MdOutlinePermContactCalendar />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Blog",
    path: "/Blogposts",
    icon: <ImIcons.ImBlogger2 />,
    cName: "nav-text",
  },
];
