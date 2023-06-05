import React from "react";
import { Route, Routes ,Navigate,useLocation,BrowserRouter} from "react-router-dom";
import PostPagination from "./Posts/PostPagination";
import AboutMe from "./AboutMe";
const UserSpecifics = React.lazy(()=>import("./UserSpecifics"))




function AppRouter() {

return (
    <BrowserRouter>
        <Routes  >
            <Route path='/PostList' element={ <PostPagination/> } />
            <Route path='/UserSpecifics'  element={<UserSpecifics />} />
            <Route path='/AboutMe'  element={<AboutMe />} />
            <Route path="*"  element={<Navigate to="/PostList"/>}/>
        </Routes> 
    </BrowserRouter>
)
}

export default AppRouter;
