import SideNav from "../ui/probaboard/sidenav";
// import NavBar from '@/app/ui/probaboard/container';
// import НомеPage from '@/app/probaboard/home/page';
import HeaderPage from "../ui/probaboard/HeaderPage/HeaderPage";
import FooterPage from "../ui/probaboard/FooterPage/FooterPage";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex-col h-screen md:flex-row ">
        <header>
          <HeaderPage />
        </header>
        <div className="flex h-screen flex-col md:flex-row ">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}{" "}
          </div>
        </div>
        <footer>
          <FooterPage />
        </footer>
      </div>
    </>
  );
}
