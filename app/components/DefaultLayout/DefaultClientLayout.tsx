'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/sidebar';
import Header from '../Header/header';
import { Box, Divider } from '@mui/material';
import { usePathname } from 'next/navigation';
interface ClientOnlyProps {
  children: React.ReactNode;
}

const DefaultClientLayout: React.FC<ClientOnlyProps> = ({
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/auth');

  useEffect(() => {
    setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    
      isAuthPage ? <Box>{children}</Box>  :
      <Box display={'flex'} flexDirection={'column'}>
        <Header/>
        <Box display={'flex'} >
          <Sidebar /> 
          <Divider sx={{height:'91vh'}} orientation='vertical' />
          <Box width={'100%'} p={1}>{children}</Box>
        </Box>
      </Box>
    
  );
};

export default DefaultClientLayout;




// "use client";
// import React, { useState, ReactNode } from "react";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import ToasterProvider from "@/app/provider/ToasterProvider";
// export default function DefaultLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <>
//       {/* <!-- ===== Page Wrapper Start ===== --> */}
//       <div className="flex h-screen overflow-hidden">
//         {/* <!-- ===== Sidebar Start ===== --> */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         {/* <!-- ===== Sidebar End ===== --> */}

//         {/* <!-- ===== Content Area Start ===== --> */}
//         <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
//           {/* <!-- ===== Header Start ===== --> */}
//           <ToasterProvider/>
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           {/* <!-- ===== Header End ===== --> */}

//           {/* <!-- ===== Main Content Start ===== --> */}
//           <main>
//             <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
//               {children}
//             </div>
//           </main>
//           {/* <!-- ===== Main Content End ===== --> */}
//         </div>
//         {/* <!-- ===== Content Area End ===== --> */}
//       </div>
//       {/* <!-- ===== Page Wrapper End ===== --> */}
//     </>
//   );
// }
