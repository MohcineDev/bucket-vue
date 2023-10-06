import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About.vue'
import Bucket from '../views/Bucket.vue'
import IPs from '../views/IPs.vue'


const routes =[
    {
        path:'/', 
        name :'Bucket',
        component:Bucket
    },
    {
        path:'/About', 
        name :'About',
        component:About
    
    }
    
    ,
    {
        path:'/IPs', 
        name :'IPs',
        component:IPs
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router