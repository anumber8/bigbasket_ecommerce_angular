import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Allproducts',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'Allproducts',
        component: WebProductsComponent,
        title: 'All-Products'
      },
      {
        path: 'products/:id',
        component: CategoryProductsComponent
      },
      {
        path: 'order-history',
        component: CustomerOrdersComponent,
        title: 'Your Orders'
      }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'category',
        component: CategoriesComponent
      }
    ]
  }

];
