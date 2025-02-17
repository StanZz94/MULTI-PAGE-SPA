import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import RootLayout from "./pages/RootLayout";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      { index: 'true', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetails /> },
    ]
  },
  { path: '/products', element: <Products /> },
  {},
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
