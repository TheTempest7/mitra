import React from "react";
import { Route, Routes ,Navigate} from "react-router-dom";
import PostPagination from "./Posts/PostPagination";
import UserSpecifics from "./UserSpecifics";
const AboutMe = React.lazy(()=>import("./AboutMe"));







function AppRouter() {

return (
        <Routes  >
            <Route path='/PostList' element={ <PostPagination/> } />
            <Route path='/UserSpecifics'  element={ <UserSpecifics/> } />
            <Route path='/AboutMe'  element={ <AboutMe/> } />
            <Route path="*"  element={ <Navigate to="/PostList"/> }/>
        </Routes> 
)
}

export default AppRouter;
