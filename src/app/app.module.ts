import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import Routers from './app.router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UploadDirective } from './upload.directive';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UploadDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
