import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// Removed the import for AppRoutingModule due to the error
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }