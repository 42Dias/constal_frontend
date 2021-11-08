import {
  Component,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('snav', { static: true })
  snav;

  mobileQuery: MediaQueryList;
  role = this.authService.currentUser.tenants[0].roles[0];  

  private _mobileQueryListener: () => void;
  url: string ='';

  input: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
    private router: Router,
  ) {
    
    
    this.mobileQuery = media.matchMedia(
      '(max-width: 600px)',
      );
      this._mobileQueryListener = () =>
      changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
    
    get opened() {
    if (!this.snav) {
      return false;
    }

    return this.snav.opened;
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  ngOnInit(): void{
    
    if (!this.mobileQuery.matches) {
      this.snav.toggle();
    }   
    
  }

  search() {
    /* const input = <HTMLInputElement>document.getElementById('input-search') */
    if (this.input === undefined){
      this.router.navigate([`/produto`]);
    } else {
      window.location.href = `/produto?filter%5Bnome%5D=${this.input}`;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(
      this._mobileQueryListener,
    );
  }
}
