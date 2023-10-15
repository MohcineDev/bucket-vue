import {createRouter, createWebHistory} from 'vue-router'

import html from '../views/HTMLText.vue'
import Bucket from '../views/Bucket.vue'
import IPs from '../views/IPs.vue'


const routes =[
    {
        path:'/', 
        name :'Bucket',
        component:Bucket
    },
    {
        path:'/html', 
        name :'html',
        component:html
    
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