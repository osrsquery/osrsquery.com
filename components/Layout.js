import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Header></Header>
            { children }
            <Footer></Footer>
        </div>
    );
}
 
export default Layout;