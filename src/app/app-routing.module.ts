import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./skip/skip.module').then(m => m.SkipPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'addproduct/:id',
    loadChildren: () => import('./addproduct/addproduct.module').then(m => m.AddproductPageModule)
  },
  {
    path: 'productdetails/:id',
    loadChildren: () => import('./productdetails/productdetails.module').then(m => m.ProductdetailsPageModule)
  },
  {
    path: 'embroidery/:id',
    loadChildren: () => import('./embroidery/embroidery.module').then(m => m.EmbroideryPageModule)
  },
  {
    path: 'embroiderylist/:id',
    loadChildren: () => import('./embroiderylist/embroiderylist.module').then(m => m.EmbroiderylistPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoritePageModule)
  },
  {
    path: 'editproduct/:id',
    loadChildren: () => import('./editproduct/editproduct.module').then(m => m.EditproductPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
