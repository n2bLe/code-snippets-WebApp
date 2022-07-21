import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnippetService } from './snippet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import * as Material from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SnippetComponent } from './snippet/snippet.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatSliderModule} from '@angular/material/slider'
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatButtonModule} from '@angular/material/button'
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatInputModule} from '@angular/material/input'
import { MatRadioModule} from '@angular/material/radio'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    SnippetComponent
  ],
  entryComponents:[
    SnippetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule

  ],
  providers: [SnippetService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
