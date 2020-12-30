import { Component, OnInit } from '@angular/core';
import { Screen338686Service } from './screen338686.service.ts';

@Component({
  selector: 'app-screen338686',
  templateUrl: './screen338686.component.html',
  styleUrls: ['./screen338686.component.scss'],
})

export class Screen338686Component implements OnInit {
    public email = {
        name: '',
    }

    constructor (
        private screen338686Service: Screen338686Service,
    ) { }

    ngOnInit() {
    }
}