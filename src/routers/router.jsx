import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AllEquipments from '../pages/AllEquipments';
import AddEquipments from '../pages/AddEquipment';
import MyEquipments from '../pages/MyEquipments';

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
            },
            {
                path: "/addequipment",
                element: <AddEquipments></AddEquipments>,
            },
            {
                path: "/my-equipment",
                element: <MyEquipments></MyEquipments>,
            },
        ]
    },

]);

export default router;
