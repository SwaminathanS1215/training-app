import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
        path: 'products', component: ProductsComponent,
        children: [
            {
                path: 'Electronics', component: ProductsComponent
            }
        ]
    },
    { path: 'employee', component: TableComponent },
    { path: 'employee/:userName', component: TableComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
