import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tabs } from './tabs.component';
import { Tab } from './tab.component';

import { Tabs2 } from './tabs2.component';
import { Tab2 } from './tab2.component';

import { TagInputModule } from 'ng2-tag-input';
import { TagInputSampleComponent } from './tag-input-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab,
    Tabs2,
    Tab2,
    TagInputSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
