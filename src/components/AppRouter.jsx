import React from "react";
import { Route, Routes ,Navigate,useLocation,BrowserRouter} from "react-router-dom";

const PostList = React.lazy(()=>import("./PostList"))
const UserSpecifics = React.lazy(()=>import("./UserSpecifics"))
const AboutMe = React.lazy(()=>import("./AboutMe"))



function AppRouter() {

return (
    <BrowserRouter>
        <Routes  >
        <Route path='/PostList' element={ <PostList/> } />
        <Route path='/UserSpecifics'  element={<UserSpecifics />} />
        <Route path='/AboutMe'  element={<AboutMe />} />
        <Route path="*"  element={<Navigate to="/PostList"/>}/>
        </Routes> 
    </BrowserRouter>
)
}

export default AppRouter;
