// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { CliComponent } from './cli/cli.component';

@NgModule({
  declarations: [AppComponent, ManualComponent, CliComponent], // declarations에 components class를 추가한다.
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
