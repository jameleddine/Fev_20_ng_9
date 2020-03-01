import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) {
    this.translate.addLangs(["en", "fr", "ar"]);
    this.translate.setDefaultLang('en');
 
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ar/) ? browserLang : 'en');
 }
 

  ngOnInit(): void {
  }

}
