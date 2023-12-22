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

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { environment } from "@aqui-pide-core/common/common-environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { environment } from "@aqui-pide-core/common/common-environment";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }), StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }),],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
