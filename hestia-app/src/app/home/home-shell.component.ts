import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hestia-home-shell',
    templateUrl: './home-shell.component.html'
})

export class HomeShellComponent implements OnInit {
    constructor(public readonly router: Router) { }

    ngOnInit() { }
}