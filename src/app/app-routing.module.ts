import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [
  { path: '', redirectTo: '/chart', pathMatch: 'full' },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'chart', component: ChartComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
