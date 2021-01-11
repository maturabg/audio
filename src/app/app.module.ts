import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaturasListComponent } from './components/maturas-list/maturas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { MaturasListItemComponent } from './components/maturas-list-item/maturas-list-item.component';
import { MaturaFilterPipe } from './pipes/maturaFilter.pipe';
import { MaturaItemComponent } from './components/matura-item/matura-item.component';
import { MaturaTypePipe } from './pipes/maturaTypePipe';
import { LanguageCodePipe } from './pipes/languageCodePipe';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LanguageCodePipe,
    MaturaFilterPipe,
    MaturaTypePipe,
    MaturasListComponent,
    MaturasListItemComponent,
    MaturaItemComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
