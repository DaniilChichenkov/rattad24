import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout, MainLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
