import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
import './style/index.css'
import { BrowserRouter } from 'react-router-dom';

export default function RootComponent (props) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [ ])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <div className='text-red-500 sm:text-blue-700 md:text-green-500'> LOADING DULU SEBENTAR </div>
  ) : (
    <div className='text-red-500 sm:text-blue-700 md:text-green-500'> THATST THE VALUE </div>
  )

  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // return (
  //   // <div className="text-red-600 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
  //   //     LAYOUT BROOO TEST
  //   //  </div>
  //   // <BrowserRouter>
  //   //   <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  //   // </BrowserRouter>
  // )
}
