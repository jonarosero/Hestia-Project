import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hestia-single-player',
  templateUrl:'./single-player-shell.component.html',
})

export class SinglePlayerShellComponent implements OnInit {
  constructor(public readonly router: Router) { }

  ngOnInit() {}

}
