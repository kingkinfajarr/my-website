import Navbar from "../navbar/Navbar";
import NavMobile from "../navbar/NavMobile";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
    <Navbar />
    <NavMobile />
    <main>{children}</main>
    <Footer />
  </>
  )
}


// const Layout = ({ children }) => {
//   return ( 
//     <>
//       <Navbar />
//       <NavMobile />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

// export default Layout;