import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
    imgSrc: string = "../assets/img/Google-Maps-Search.png";
  onMouseOver(): void {
    this.imgSrc = "../assets/img/Google-Maps-Search-active-hover.png";
  }
  onMouseOut(): void {
    this.imgSrc = "../assets/img/Google-Maps-Search.png";
  }
   
   imgSrc1: string = "../assets/img/Influencers-Search.png";
   onMouseOver1(): void {
   this.imgSrc1 = "../assets/img/Influencers-Search-active.png";
   }
   onMouseOut1(): void {
   this.imgSrc1 = "../assets/img/Influencers-Search.png";
   }

   imgSrc2 :string ="../assets/img/Linkedin.png";
   onMouseOver2(): void {
   this.imgSrc2 = "../assets/img/Linkedin-active.png";
   }
   onMouseOut2(): void {
   this.imgSrc2 = "../assets/img/Linkedin.png";
   }

   imgSrc3 : string ="../assets/img/Website-data-search.png";
   onMouseOver3(): void{
   this.imgSrc3 = "../assets/img/Website-data-search-active-hover.png";
   }
   onMouseOut3(): void{
   this.imgSrc3 = "../assets/img/Website-data-search.png";
   }

  }
