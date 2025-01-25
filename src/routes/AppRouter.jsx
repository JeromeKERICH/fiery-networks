
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Deal from '../pages/Deal';
import ServicePage from '../pages/Service';
import EventsPage from '../pages/Events';
import AboutPage from '../pages/About';
import CTA2 from '../pages/CTA2';
import Linkedin from '../pages/Linkedin';
import Ghost from '../pages/Ghost';
import Social from '../pages/Social';
import Whatsapp from '../pages/Whatsapp';
import Book from '../pages/Book';
import LinkedInManagement from '../pages/Linkman';
import EventHostingModeration from '../pages/Hosting';
import LinkedInBootcamp from '../pages/Bootcamp';
import FreelancingConsulting from '../pages/Market';
import PopUpEvents from '../pages/Popup';


const AppRouter = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/deal" element={<Deal/>}/>
                <Route path="/servicepage" element={<ServicePage/>}/>
                <Route path="/eventspage" element={<EventsPage/>}/>
                <Route path="/aboutpage" element={<AboutPage/>}/>
                <Route path="/cta2" element={<CTA2/>}/>
                <Route path="/linkedin" element={<Linkedin/>}/>
                <Route path="/ghost" element={<Ghost/>}/>
                <Route path="/social" element={<Social/>}/>
                <Route path="/whatsapp" element={<Whatsapp/>}/>
                <Route path="/book" element={<Book/>}/>
                <Route path="linkedinmanagement" element={<LinkedInManagement/>}/>
                <Route path="eventhosting" element={<EventHostingModeration/>}/>
                <Route path="linkedinbootcamp" element={<LinkedInBootcamp/>}/>
                <Route path="freelancingconsulting" element={<FreelancingConsulting/>}/>
                <Route path="popupevents" element={<PopUpEvents/>}/>
                 
            </Routes>
        </Layout>
    </Router>
  )
}

export default AppRouter
