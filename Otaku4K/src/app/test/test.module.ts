import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MaterialsModule} from '@systel/materials';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterTestingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    HttpClientTestingModule,
    MaterialsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
