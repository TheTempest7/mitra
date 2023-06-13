import React, { Suspense } from "react";
import { Route, Routes ,Navigate} from "react-router-dom";
import { Loader } from "./Loader/Loader";
const AboutMe = React.lazy(()=>import("./AboutMe"));
const UserSpecifics = React.lazy(()=>import("./UserSpecifics"));
const PostPagination = React.lazy(()=>import("./Posts/PostPagination"));







function AppRouter() {

return (
        <Routes  >
            <Route exact path='/' element={
                <Suspense fallback={<Loader/>}>
                    <PostPagination/>
                </Suspense>
            } />
            <Route path='/UserSpecifics'  element={
                <Suspense fallback={<Loader/>}>
                    <UserSpecifics/>
                </Suspense>  } />
            <Route path='/AboutMe'  element={
                <Suspense fallback={<Loader/>}>
                    <AboutMe/>
                </Suspense> } />
            <Route path="*"  element={ <Navigate to="/"/> }/>
        </Routes> 
)
}

export default AppRouter;
