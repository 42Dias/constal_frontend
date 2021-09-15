import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService,
    ) {
      this.images = [
        { name: 'http://lorempixel.com/640/480/animals/' },
        { name: 'http://lorempixel.com/640/480/abstract/' },
        { name: 'http://lorempixel.com/640/480/business/' },
        { name: 'http://lorempixel.com/640/480/cats/' },
        { name: 'http://lorempixel.com/640/480/city/' },
        { name: 'http://lorempixel.com/640/480/food/' },
        { name: 'http://lorempixel.com/640/480/nightlife/' },
        { name: 'http://lorempixel.com/640/480/fashion/' },
        { name: 'http://lorempixel.com/640/480/people/' },
        { name: 'http://lorempixel.com/640/480/nature/' },
        { name: 'http://lorempixel.com/640/480/sports/' },
        { name: 'http://lorempixel.com/640/480/transport/' },
      ]
    }

  ngOnInit(): void {}
  images: Array<any> = []
}
