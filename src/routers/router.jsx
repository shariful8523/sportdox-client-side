import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllEquipments from '../pages/AllEquipments';
import AddEquipments from '../pages/AddEquipment';
import MyEquipments from '../pages/MyEquipments';
import ViewProduct from '../pages/ViewProduct';
import UpdateEquipment from '../pages/UpdateEquipment';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/equipment",
                element: <AllEquipments></AllEquipments>,
                // loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: "/addequipment",
                element: <AddEquipments></AddEquipments>,
            },
            {
                path: "/my-equipment",
                element: <MyEquipments></MyEquipments>,
            },
            {
                path: "/viewProduct/:id",
                element: <ViewProduct></ViewProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateEquipment></UpdateEquipment>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        
        ]
    },

]);

export default router;
