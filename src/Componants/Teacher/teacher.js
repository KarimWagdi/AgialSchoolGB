import { BrowserRouter, Switch, Route } from "react-router-dom"
import Sidebar from './sidebar/sidebar.js'
import Peofile from './Profile/profile.js'
import Lessons from './Lessons/lessons.js'
import Events from './Events/events.js'
import Feedback from './feedbacks/feedback.js'
import TimeTabel from './timeTabel/tabel.js'


function Teacher() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path={"/Peofile"} exact component={Peofile}/>
          <Route path={"/Lessons"} exact component={Lessons}/>
          <Route path={"/Events"} exact component={Events}/>
          <Route path={"/Feedback"} exact component={Feedback}/>
          <Route path={"/TimeTabel"} exact component={TimeTabel}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Teacher;