import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Main/Main";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Faq from "./component/FaqQuestions/Faq";
import Blog from "./component/Blog/Blog";
import Courseinfo from "./component/Courseinfo/Courseinfo";
import Coursehomepage from "./component/CourseMainPage/Coursehomepage";
import Specific from "./component/SpecificCourseDetails/Specific";
import PremiumAccess from "./component/PremiumAccess/PremiumAccess";
import PrivateRoute from "./component/PrvateRoute/PrivareRoute";
import Error from "./component/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Coursehomepage></Coursehomepage>,
          children: [
            {
              path: "/courses/info/:id",
              element: <Courseinfo></Courseinfo>,
              loader: ({ params }) =>
                fetch(
                  `https://learning-platform-serverside.vercel.app/courses/info/${params.id}`
                ),
            },
            {
              path: "/courses/specific/:id",
              element: <Specific></Specific>,
              loader: ({ params }) =>
                fetch(
                  `https://learning-platform-serverside.vercel.app/courses/specific/${params.id}`
                ),
            },
          ],
        },
        {
          path: "/premiumaccess",
          element: (
            <PrivateRoute>
              <PremiumAccess></PremiumAccess>
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/*",
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
