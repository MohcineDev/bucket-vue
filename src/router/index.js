import {createRouter, createWebHistory} from 'vue-router'

import html from '../views/HTMLText.vue'
import Bucket from '../views/Bucket.vue'
import IPs from '../views/IPs.vue'
import Verification from '../views/Verification.vue' 
import Clix from '../views/Clix.vue'

const routes = [
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
    },{
        path:'/verification',
        name:'verification',
        component:Verification
    },{
        path:'/clix',
        name:'clix',
        component:Clix
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router