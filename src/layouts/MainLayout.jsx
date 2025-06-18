import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* <-- Like Vue's <router-view> */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
