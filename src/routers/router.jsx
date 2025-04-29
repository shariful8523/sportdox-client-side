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
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from '../layouts/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/equipment",
                element: <AllEquipments></AllEquipments>,
                // loader: () => fetch('https://sportdox-server-side.vercel.app/products'),
            },
            {
                path: "/addequipment",
                element: (<PrivateRoute>
                    <AddEquipments></AddEquipments>
                </PrivateRoute>) ,
            },
            {
                path: "/my-equipment",
                element: (<PrivateRoute>
                    <MyEquipments></MyEquipments>
                </PrivateRoute>)  ,
            },
            {
                path: "/viewProduct/:id",
                element: (<PrivateRoute>
                    <ViewProduct></ViewProduct>
                </PrivateRoute>) ,
                loader: ({params}) => fetch(`https://sportdox-server-side.vercel.app/products/${params.id}`)
            },
            {
                path: "/updateProduct/:id",
                element:(<PrivateRoute>
                    <UpdateEquipment></UpdateEquipment>
                </PrivateRoute>  ) ,
                loader: ({params}) => fetch(`https://sportdox-server-side.vercel.app/products/${params.id}`)

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
