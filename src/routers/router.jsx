import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllEquipments from '../pages/AllEquipments';
import AddEquipments from '../pages/AddEquipment';
import MyEquipments from '../pages/MyEquipments';
import ViewProduct from '../pages/ViewProduct';

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
        ]
    },

]);

export default router;
