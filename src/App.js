import './App.scss';
// Navbar Componant
import NavbarComponant from './Componants/NavbarComponant';

// Home Componant
import HomeComponant from './Componants/HomeComponant';

// About Us
import Overview from './Componants/AboutUs/Overview';
import WelcomeLetter from './Componants/AboutUs/WelcomeLetter';
import Values from './Componants/AboutUs/Values';
import SchoolPolicy from './Componants/AboutUs/SchoolPolicy';

// Education
import AcademicInfo from './Componants/Education/AcademicInfo';
import InnovativeLearn from './Componants/Education/InnovativeLearn';
import DigitalLearning from './Componants/Education/DigitalLearning'

// Co-Curricular
import Arts from './Componants/Co-Curricular/Arts';
import Technology from './Componants/Co-Curricular/Technology';
import Sport from './Componants/Co-Curricular/Sport';


// Co-Curricular

import KGOne from './Componants/SchoolGrade/KG/KGOne'
import KGTwo from './Componants/SchoolGrade/KG/KGTwo'
import primaryOne from './Componants/SchoolGrade/Primary/primaryOne'
import primaryTwo from './Componants/SchoolGrade/Primary/primaryTwo';
import primaryThr from './Componants/SchoolGrade/Primary/primaryThr';
import primaryFour from './Componants/SchoolGrade/Primary/primaryFour';
import primaryFi from './Componants/SchoolGrade/Primary/primaryFi';
import primarySix from './Componants/SchoolGrade/Primary/primarySix';
import prepOne from './Componants/SchoolGrade/Prep/prepOne'
import prepTwo from './Componants/SchoolGrade/Prep/prepTwo';
import prepTh from './Componants/SchoolGrade/Prep/prepTh'

// Community
import Experience from './Componants/Community/Experience';
import Club from './Componants/Community/Club';
import Teachers from './Componants/Community/Teachers'

// Contact Us 
import ContactUsComponant from './Componants/ContactUsComponant'

// Admission
import Admissions from './Componants/Admission/Admissions';

//Footer
import Footer from './Componants/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponant />
        <Switch>
          {/* Home Routes */}

          <Route path={"/"} exact component={HomeComponant} />
          <Route path={"/Home"} exact component={HomeComponant} />

          {/*About US Routes  */}

          <Route path={"/Overview"} exact component={Overview} />
          <Route path={"/Welcomeletter"} exact component={WelcomeLetter} />
          <Route path={"/Values"} exact component={Values} />
          <Route path={"/SchoolPolicy"} exact component={SchoolPolicy} />

          {/* Education Routes */}

          <Route path={"/DigitalLearning"} exact component={DigitalLearning} />
          <Route path={"/InnovativeLearn"} exact component={InnovativeLearn} />
          <Route path={"/AcademicInfo"} exact component={AcademicInfo} />

          {/* Co-curricular Routes */}

          <Route path={"/Arts"} exact component={Arts} />
          <Route path={"/Sport"} exact component={Sport} />
          <Route path={"/Technology"} exact component={Technology} />

          {/* School Grade Routes */}
          <Route path={"/KGOne"} exact component={KGOne} />
          <Route path={"/KGTwo"} exact component={KGTwo} />
          <Route path={"/primaryOne"} exact component={primaryOne} />
          <Route path={"/primaryTwo"} exact component={primaryTwo} />
          <Route path={"/primaryThr"} exact component={primaryThr} />
          <Route path={"/primaryFour"} exact component={primaryFour} />
          <Route path={"/primaryFi"} exact component={primaryFi} />
          <Route path={"/primarySix"} exact component={primarySix} />
          <Route path={"/prepOne"} exact component={prepOne} />
          <Route path={"/prepTwo"} exact component={prepTwo} />
          <Route path={"/prepTh"} exact component={prepTh} />

          {/* Admission Routes */}

          <Route path={"/Admissions"} exact component={Admissions} />

          {/* Community Routes */}

          <Route path={"/Club"} exact component={Club} />
          <Route path={"/Teachers"} exact component={Teachers} />
          <Route path={"/Experience"} exact component={Experience} />



          {/* Contact Us Route */}
          <Route path={"/ContactUs"} exact component={ContactUsComponant} />



        </Switch>

      </BrowserRouter>
      <Footer />

    </>



  )
}

export default App;
