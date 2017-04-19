/**
 * Created by Administrator on 2017/4/19 0019.
 */
// http://www.cnblogs.com/keatkeat/p/5810987.html
import {RouterModule, Routes} from '@angular/router'

import {IndexComponent} from './index/index.component';

export default RouterModule.forRoot([
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: 'index',
    component: IndexComponent,
    // canActivate: [] 进入回调服务
    // canDeactivate : [] 跳出回调服务
    // children: []
    // 子路由 要求父组件拥有  <router-outlet>
    // loadChildren: "app/product/product.module#ProductModule"
    // 异步加载 ProductModule 是类的名字, 如果是用 export default 的话，这里可以不需要表明
  }
]);
