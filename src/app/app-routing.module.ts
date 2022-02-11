import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
//import { BlogsComponent } from './blogs/blogs.component';
//import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'register', component: RegisterComponent },
//{ path: 'blogs', component: BlogsComponent },
//{ path: 'careers', component: CareersComponent },
{ path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
