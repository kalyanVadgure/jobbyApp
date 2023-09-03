import {Route, Switch} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import NotFound from './Components/NotFound'
import Header from './Components/Header'

import JobItemFolder from './Components/JobItemFolder'
import FilterGroup from './Components/FilterGroup'
import ProtectedRoute from './Components/ProtectedRoute'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <Route exact path="/filter" component={FilterGroup} />
    <Route component={JobItemFolder} />
    <Route component={NotFound} />
  </Switch>
)

export default App
