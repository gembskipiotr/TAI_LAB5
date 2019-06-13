import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { QuizComponent } from './quiz/quiz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { SummaryPipe } from './pipes/summary.pipe';
import {FormsModule} from '@angular/forms';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { SelectizeComponent } from './components/selectize/selectize.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    QuizComponent,
    KontaktComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterPipe,
    TextFormatDirective,
    SelectizeComponent,
    AddPostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
