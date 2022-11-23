import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux"
import { verifyAction } from "./store/apps/auth";
import { AppDispatch } from "./store";

function App() {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(verifyAction(dispatch))
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
