import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompterComponent } from './compter/compter.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/app.reducer';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CompterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ appState: reducer }),
    //  StoreDevtoolsModule.instrument({
    //    name: 'Counterx devtools',
    //    maxAge: 15
    //  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
