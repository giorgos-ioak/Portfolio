import { Suspense, lazy } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../UI/Loading/Loading.jsx";

const MainLayout = lazy(() => import("./MainLayout.jsx"));

function MainLayoutWrapper(){
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(resolvedData) => <MainLayout data={resolvedData} />}
      </Await>
    </Suspense>
  );
};

export default MainLayoutWrapper;