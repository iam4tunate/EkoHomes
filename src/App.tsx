import { Route, Routes } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { ScrollToTop } from './components/shared';
import RootLayout from './_root/RootLayout';
import Login from './_auth/forms/Login';
import Register from './_auth/forms/Register';
import {
  About,
  CreateHome,
  Explore,
  Home,
  HomeDetails,
  Services,
  UpdateHome,
} from './_root/pages';
import PrivateRoutes from './lib/PrivateRoutes';
import Listings from './_root/pages/Listings';
import Apply from './_root/pages/Apply';
import Profile from './_root/pages/Profile';

export default function App() {
  return (
    <div className=''>
      <ScrollToTop>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path='/create' element={<CreateHome />} />

            {/* private routes  */}
            <Route element={<PrivateRoutes />}>
              <Route path='/update/:id' element={<UpdateHome />} />
              <Route path='/apply' element={<Apply />} />
              <Route path='/listings/:id' element={<Listings />} />
              <Route path='/profile' element={<Profile />} />
            </Route>

            {/* public routes  */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/home/:id' element={<HomeDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/services' element={<Services />} />
          </Route>
        </Routes>
      </ScrollToTop>

      <Toaster />
    </div>
  );
}
