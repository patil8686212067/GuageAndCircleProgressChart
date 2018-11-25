import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ChartsModule } from 'ng2-charts';
import {AmexioWidgetModule,AmexioDashBoardModule,AmexioChartsModule} from 'amexio-ng-extensions';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
   
  ],
  imports: [
    BrowserModule,ChartsModule,AmexioWidgetModule,AmexioDashBoardModule,AmexioChartsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      // radius: 100,
      // outerStrokeWidth: 16,
      // innerStrokeWidth: 8,
      // outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      // animationDuration: 300,
      // "radius": 60,
      // "outerStrokeWidth": 10,
      // "innerStrokeWidth": 5,
      // "showBackground": false,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 