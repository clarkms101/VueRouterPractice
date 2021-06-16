import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import card1 from '@/components/pages/card1';
import card2 from '@/components/pages/card2';
import card3 from '@/components/pages/card3';
import Menu from '@/components/pages/menu';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name: '首頁',
            path: '/index',
            component: Hello
        },
        {
            // name: '分頁',
            path: '/page',
            component: Page,
            components: {
                default: Page,
                menu: Menu,
            },
            children: [
                {
                    name: '卡片 預設',
                    path: '', // 不填會變成預設帶入的路徑
                    component: card1
                },
                {
                    name: '卡片 1',
                    path: 'card1',
                    component: card1
                },
                {
                    name: '卡片 2',
                    path: 'card2',
                    component: card2
                },
                {
                    name: '卡片 3',
                    path: 'card3',
                    component: card3
                }
            ]
        }
    ]
})