import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
    {
        title: "Profile",
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: "Your Scheduler",
                path:'/userScheduler',
                icon:<RiIcons.RiTodoLine/>,
            }
        ]
    },
    {
        title: "Rooms",
        path:'/rooms',
        icon:<BsIcons.BsList/>,
        iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: "Add Room",
                path:'/addRoom',
                icon:<RiIcons.RiTodoLine/>,
            }
        ]
    }
]
