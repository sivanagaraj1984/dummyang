import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
    { path: '', component: VehiclesComponent },
    { path: 'details/:id', component: VehicleDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
