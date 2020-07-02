import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hestia-multiplayer',
  templateUrl:'./multiplayer-shell.component.html',
})

export class MultiplayerShellComponent implements OnInit {
  constructor(public readonly router: Router) { }

  ngOnInit() {}

}
