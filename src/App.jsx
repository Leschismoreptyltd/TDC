import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout";
import routes from "./routes/path";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClienet = new QueryClient

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
  }
  ])

  return (
   <QueryClientProvider client = {queryClienet}>

    <RouterProvider router = {router}/>


   </QueryClientProvider>
  )
}

export default App;


