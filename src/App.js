import BlogList from './BlogList';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BlogDetail from './BlogDetail';
import BlogForm from './BlogForm';
import About from "./About"
import HomeLayout from './HomeLayout';
import Error from "./Error"
import { BlogProvider } from "./blog-context"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route path="/blogland" element={<BlogList />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<BlogForm />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <BlogProvider>
      <RouterProvider router={router} />

    </BlogProvider>
  );
}

export default App;

