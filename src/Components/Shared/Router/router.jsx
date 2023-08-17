import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../../../ErrorPage/ErrorElement";
import Home from "../../Home/Home";
import SignIn from "../../SecurityLogin/SignIn";
import SignUp from "../../Register/SignUp";
import Dashboard from "../Layout/DashboardLayout";

import ProfileLayout from "../Layout/ProfileLayout";
import SearchPage from "../../Dashboard/SearchPage/SearchPage";
import UserRegister from "../../Dashboard/Register/UserRegister";
import Prisonars from "../../Dashboard/AllPrisonars/Prisonars";
import AllGuards from "../../Dashboard/AllGuards/AllGuards";
import QueryBuilder from "../../Dashboard/QueryBuilder/QueryBuilder";
import DashboardLayout from "../Layout/DashboardLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/SignUp',
                element: <SignUp />
            },
            {
                path: '/SignIn',
                element: <SignIn />
            },
            {
                path: '/data',
                element: <AllGuards />
            }
        ]
    },
    {
        path: '/Dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/Dashboard/home',
                element: <SearchPage />
            },
            {
                path: '/Dashboard/registerUser',
                element: <UserRegister />
            },
            {
                path: '/Dashboard/prisoners',
                element: <Prisonars />
            },
            {
                path: '/Dashboard/allGuards',
                element: <AllGuards />
            },
            {
                path: '/Dashboard/queryBuilder',
                element: <QueryBuilder />
            },
            {
                path: '/Dashboard/profile',
                element: <ProfileLayout />,

            }

        ]
    },

])