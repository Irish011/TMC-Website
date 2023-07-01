import { BrowserRouter,Route } from "react-router-dom";
import HomePage from "./pages/home";
import SiteNavbar from "./components/header";
// import { useHistory } from 'react-router-dom';

const Routing = ()=>{

    return(
        <div>
            <BrowserRouter>
            <SiteNavbar/>
            <switch>
                <Route path="/" exact
                    render={()=><HomePage/>}
                />
            </switch>
            </BrowserRouter>
        </div>
    );
};

export default Routing;


