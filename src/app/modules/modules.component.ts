import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../cart.service';
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesComponent implements OnInit {

 @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public size: number; 
 
    
     public product: Product = {};
     public shoppingCartItems$: Observable<Product[]>;
      @Input() public items: Product[] = [];


     

    constructor( private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService
    , private cartService: CartService) {
     productsService.getProducts()
      .subscribe(_ => this.items = _);

        this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
   
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProduct(id)
        .subscribe(_ => this.product = _)
    });
  }
    
   imgSrc: string = "../assets/img/shopping-cart.png";
  public text: string = 'Add to shopping cart';
onClick1(){
	this.imgSrc = "../assets/img/green-reports.png";
     if(this.text === 'Add to shopping cart') { 
        this.text = 'Added to cart'

      } 
}
   imgSrc1: string = "../assets/img/shopping-cart.png";
  public text1: string = 'Add to shopping cart';
onClick2(){
	this.imgSrc1 = "../assets/img/green-reports.png";
     if(this.text1 === 'Add to shopping cart') { 
        this.text1 = 'Added to cart'
      } 
}

      public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
