import React from 'react'
import { Route } from 'react-router-dom'

//import layouts
import PublicLayout from './HOC/public_layout/public_layout'
import RegisterLoginLayout from './HOC/login_register_layout'
import UserLayout from './HOC/user_layout'


import auth from './HOC/auth_routes'

import FooterComp from './components/footer/footer'

//import components
import Home from './components/home/home'
import ListDonation from './components/list_donations'
import Register from './components/register'
import Login from './components/login'
import confirmation from './components/confirmation'
import Dashboard from './components/dashboard'
import ResendConfirmation from './components/resend_confirmation'
import Post from './components/post'
import Logout from './components/logout/index'
import Profil from './components/profil/index'
import Inbox from './components/inbox'
import DonationPost from './components/donation_post'
import DonationInfo from './components/donation_info'

function Routes() {
    return (
        <div>      
            <Route path='/' exact component={auth(Home,'excluded',PublicLayout)} />

            <Route path='/donor/donation' exact component={auth(ListDonation,'donor',UserLayout)}/>
            <Route path='/charity/donation' exact component={auth(ListDonation,'charity',UserLayout)}/>

            <Route path='/donor/donation/:d' exact component={auth(DonationPost,'donor',UserLayout)}/>
            <Route path='/charity/donation/:d' exact component={auth(DonationPost,'charity',UserLayout)}/>

            <Route path='/donation' exact component={auth(ListDonation,null,PublicLayout)}/>

            <Route path='/register' exact component={auth(Register,'excluded',RegisterLoginLayout)} />
            <Route path='/login' exact component={auth(Login,'excluded',RegisterLoginLayout)} />
            <Route path='/confirmation/:token' exact component={auth(confirmation,'excluded',RegisterLoginLayout)} />
            <Route path='/resend-confirmation' exact component={auth(ResendConfirmation,'excluded',RegisterLoginLayout)} />
            
            <Route path='/donor/dashboard' exact component={auth(Dashboard,'donor',UserLayout)} />
            <Route path='/charity/dashboard' exact component={auth(Dashboard,'charity',UserLayout)} />

            <Route path='/charity/post' exact component={auth(Post,'charity',UserLayout)} />
            <Route path='/donor/post' exact component={auth(Post,'donor',UserLayout)} />
            
            
            <Route path='/charity/profil' exact component={auth(Profil,'charity',UserLayout)} />
            <Route path='/donor/profil' exact component={auth(Profil,'donor',UserLayout)} />

            <Route path='/donor/inbox' exact component={auth(Inbox,'donor',UserLayout)} />
            <Route path='/charity/inbox' exact component={auth(Inbox,'charity',UserLayout)} />

            <Route path='/donor/donation/info/:id' exact component={auth(DonationInfo,'donor',UserLayout)} />
            <Route path='/charity/donation/info/:id' exact component={auth(DonationInfo,'charity',UserLayout)} />

            <Route path='/logout' exact component={Logout} />
        </div>
        
    )
}

export default Routes
