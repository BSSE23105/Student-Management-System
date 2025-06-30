import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import Grades from './pages/Grades';
import Attendance from './pages/Attendance';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={StudentList} />
        <Route exact path="/students/new" component={AddStudent} />
        <Route exact path="/students/edit/:id" component={AddStudent} />
        <Route exact path="/grades" component={Grades} />
        <Route exact path="/attendance" component={Attendance} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}