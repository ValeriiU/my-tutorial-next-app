import SideNav from '../ui/probaboard/sidenav';
// import NavBar from '@/app/ui/probaboard/container';
// import НомеPage from '@/app/probaboard/home/page';
import HeaderPage from '../ui/probaboard/HeaderPage/HeaderPage';
import FooterPage from '../ui/probaboard/FooterPage/FooterPage';
import { Suspense } from 'react';
 
export default function Layout({ children }) {
  return (
    <Suspense>
      <div className="flex-col md:flex-row p-5 ">
        <header>
          {/* <title>{title ? title + ' E-Shop' : "E-Shop"} </title> */}
            <HeaderPage />
        </header> 

        <main>
      <div className="flex h-screen flex-col md:flex-row ">
        <div className="w-full flex-none md:w-64">
            <SideNav/>
        </div>
        <div className="flex-grow  p-3 md:overflow-y-auto md:p-3">
              <Suspense>{children}</Suspense>
        </div>
      </div>
        </main>
        
        <div >
          <footer  >
              <FooterPage />
          </footer></div>
      </div>
    </Suspense>

  );
}