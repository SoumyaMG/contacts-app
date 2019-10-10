import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import ContactList from './components/contacts/list'
import ContactNew from './components/contacts/new'
import ContactEdit from './components/contacts/edit'
import ContactShow from './components/contacts/show'

import Register from './components/users/register'
import Login from './components/users/login'
import Logout from './components/users/logout'
import Profile from './components/users/account'

import TopNav from './components/navigation/top'


class App extends React.Component{
    render(){
      return (
        <BrowserRouter>
          <div className="container">

            <TopNav />
            <Switch>
              <Route path="/contacts" component={ContactList} exact={true}/>
              <Route path="/contacts/new" component={ContactNew} />
              <Route path="/contacts/edit/:id" component={ContactEdit} />
              <Route path="/contacts/:id" component={ContactShow} />

              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={Login} />
              <Route path="/users/logout" component={Logout} />
              <Route path="/users/account" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
}

export default App