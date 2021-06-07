import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';

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
            component: Page,
            children: [
                {
                    name: '卡片 1',
                    path: '', // 不填會變成預設帶入的路徑
                    component: child
                },
                {
                    name: '卡片 2',
                    path: 'child2',
                    component: child2
                },
                {
                    name: '卡片 3',
                    path: 'child3',
                    component: child3
                }
            ]
        }
    ]
})