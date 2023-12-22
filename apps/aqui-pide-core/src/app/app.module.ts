import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@aqui-pide-core/common/ui";
import { GlobalFooterModule } from "@aqui-pide-core/common/ui";
import { GlobalSidenavModule } from "@aqui-pide-core/common/ui";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@aqui-pide-core/common/ui";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GlobalSidenavModule } from "@aqui-pide-core/common/ui";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@aqui-pide-core/common/ui";
import { GlobalFooterModule } from "@aqui-pide-core/common/ui";
import { GlobalSidenavModule } from "@aqui-pide-core/common/ui";
import { MatListModule } from "@angular/material/list";
import { GlobalHeaderComponentModule } from "@aqui-pide-core/common/ui";
import { GlobalFooterModule } from "@aqui-pide-core/common/ui";
import { GlobalSidenavModule } from "@aqui-pide-core/common/ui";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, BrowserAnimationsModule, GlobalSidenavModule, MatListModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
