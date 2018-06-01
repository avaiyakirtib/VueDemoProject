import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Jobs from '@/components/Jobs'
import AddJob from '@/components/AddJob'
import JobDetails from '@/components/JobDetails'
import Customers from '@/components/Customers'
import Employees from '@/components/Employees'
import Reports from '@/components/Reports'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/addJob',
      name: 'AddJob',
      component: AddJob
    },
    {
      path: '/jobDetails',
      name: 'JobDetails',
      component: JobDetails
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
