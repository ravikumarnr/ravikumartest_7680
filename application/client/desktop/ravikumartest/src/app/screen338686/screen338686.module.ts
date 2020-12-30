import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen338686Component } from './screen338686.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Screen338686Component },
        ])
    ],
    declarations: [
        Screen338686Component,
    ]
})
export class Screen338686Module { }