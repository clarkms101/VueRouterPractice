import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/HelloWorld';
import Page from '@/components/pages/page';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name: '首頁',
            path: '/index',
            component: Hello
        },
        {
            name: '分頁',
            path: '/page',
            component: Page
        }
    ]
})