import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ReferenceService } from './services/reference.service';
import { CommonModule } from '@angular/common';  
import { HaversineService } from "ng2-haversine";
import { DecimalPipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ShareComponent } from './share/share.component';
import { CardsComponent } from './cards/cards.component';
import { DistancePipe } from './filters/distance.pipe';
import { StorageFactoryService } from './services/storagefactory.service';
import { PubComponent } from './pub/pub.component';
import { ProductComponent } from './product/product.component';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'assets/translations/', '-lang.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    HistoryComponent,
    HomeComponent,
    ShareComponent,
    CardsComponent,
    DistancePipe,
    PubComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
  ],
  exports: [
  	TranslateModule
  ],
  providers: [ReferenceService, HaversineService, DecimalPipe, StorageFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
