import React from 'react'
import { Route } from 'react-router-dom'

import style from './style.css'
//import layouts
import PublicLayout from '../HOC/public_layout/index'
import RegisterLoginLayout from '../HOC/login_register_layout/index'
import UserLayout from '../HOC/user_layout/index'

import auth from '../HOC/auth_routes'

//import components
import Home from '../components/home/home'
import PostsList from '../components/posts_list'
import Register from '../components/register'
import Login from '../components/login'
import confirmation from '../components/confirmation'
import Dashboard from '../components/dashboard'
import ResendConfirmation from '../components/resend_confirmation'
import Logout from '../components/logout'
import Profil from '../components/profil'
import Inbox from '../components/inbox'
import DonationPost from '../components/donation_post'
import PostInfo from '../components/post_info'

function Routes() {
    return (
        <div className={style.container}>      
            <Route path='/' exact component={auth(Home,'excluded',PublicLayout)} />


            <Route path='/post/:id' exact component={auth(PostInfo,'donor',UserLayout)} />

            <Route path='/donation/:id' exact component={auth(DonationPost,null,UserLayout)}/>

            <Route path='/public/posts' exact component={auth(PostsList,null,PublicLayout)}/>

            <Route path='/posts' exact component={auth(PostsList,'donor',UserLayout)}/>

            <Route path='/dashboard' exact component={auth(Dashboard,null,UserLayout)} />           
            <Route path='/profil' exact component={auth(Profil,null,UserLayout)} />
            <Route path='/inbox' exact component={auth(Inbox,null,UserLayout)} />

            <Route path='/register' exact component={auth(Register,'excluded',RegisterLoginLayout)} />
            <Route path='/login' exact component={auth(Login,'excluded',RegisterLoginLayout)} />
            <Route path='/confirmation/:token' exact component={auth(confirmation,'excluded',RegisterLoginLayout)} />
            <Route path='/resend-confirmation' exact component={auth(ResendConfirmation,'excluded',RegisterLoginLayout)} />
            <Route path='/logout' exact component={Logout} />
        </div>
        
    )
}

export default Routes
