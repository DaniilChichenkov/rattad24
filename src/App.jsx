import { createHashRouter, RouterProvider } from "react-router-dom";

import { RootLayout, MainLayout } from "./layouts";

const router = createHashRouter([
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
