import {Injectable} from '@angular/core';
import { Product } from './product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Concierge service', currency: '$XX/ month',  },
      <Product>{id: 2, name: 'Initial consultation', currency: '$XX/ month', },
      <Product>{id: 3, name: 'Venue details', currency: '$XX/ month',  },
      <Product>{id: 4, name: 'Employee details', currency: '$XX/ month', },
      <Product>{id: 5, name: 'Green and blue', currency: '$XX/ month',},
      <Product>{id: 6, name: 'Green and blue', currency: '$XX/ month', },
      <Product>{id: 7, name: 'Gray', currency: '$XX/ month', },
      <Product>{id: 8, name: 'Blue', currency: '$XX/ month',},
      <Product>{id: 9, name: 'All colors', currency: '$XX/ month',},
    ]);
  }

}
