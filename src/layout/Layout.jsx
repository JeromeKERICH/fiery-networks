import FloatingWhatsApp from "../components/Floating";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <FloatingWhatsApp/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
