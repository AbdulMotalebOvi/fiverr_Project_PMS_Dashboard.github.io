import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaHome, FaUserEdit, FaLock, FaMoneyBill, FaPlusCircle, FaUser, FaSignOutAlt } from "react-icons/fa";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import logo from '../../../assets/logo/dashboardLogo.png'
import './sidebar.css'
const routes = [

    {
        path: "/Dashboard/home",
        name: "Dashboard",
        icon: <FaHome />,
        tooltip: 'Dashboard'
    },
    {
        path: "/Dashboard/profile",
        name: "Profile",
        icon: <FaUserEdit />,
        tooltip: 'Profile'

    },
    {
        path: "/Dashboard/registerUser",
        name: "Register Prisoner",
        icon: <FaPlusCircle />,
        tooltip: 'Register'
    },
    {
        path: "/Dashboard/prisoners",
        name: "All prisoners",
        icon: <FaUser />,
        tooltip: 'All Prisoners'
    },
    {
        path: "/Dashboard/allGuards",
        name: "All Guards",
        icon: <FaMoneyBill />,
        tooltip: 'All Guards'
    },
    {
        path: "/Dashboard/queryBuilder",
        name: "Query Builder",
        icon: <FaLock />,
        tooltip: 'Query Builder'
    },
    {
        path: "/",
        name: "Sign Out",
        icon: <FaSignOutAlt />,
        tooltip: 'Sign Out'
    },

];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "10px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "300px" : "100px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    <Link to='/' className='flex items-center space-x-2 mt-10'>
                                        <img src={logo} className='w-[50px] h-[45px]' alt="logo" />
                                        <div className='text-white'>
                                            <h2 className='text-[36px] h-[36px]'>PMS</h2>
                                            <h5 className='text-[10px]'>PRISON MANAGEMENT SYSTEM</h5>
                                        </div>
                                    </Link>
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>

                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeclassname="active"

                                >

                                    <div className="ml-5 tooltip tooltip-top icon " data-tip={route.tooltip}>{route.icon}</div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}

                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;