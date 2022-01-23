import { Component, OnInit } from '@angular/core';
import { VehicleType } from './vehicles.type';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: [ './vehicles.component.css' ]
})
export class VehiclesComponent implements OnInit {
    public title = 'Vehicles';
    public data!: VehicleType[];
    public fSellerType: string = '';
    public fMake: string = '';
    public isLoading = true;

    ngOnInit(): void {
        fetch('http://localhost:5000/api/vehicles')
            .then(response => response.json())
            .then(d => {
                this.isLoading = false;
                this.data = d;
            });
    }

    submit(): void {
        console.log(this.fSellerType, this.fMake);
        this.isLoading = true;
        let url = 'http://localhost:5000/api/vehicles?1=1';
        if(this.fMake != '') url = url + '&make=' + this.fMake;
        if(this.fSellerType != '') url = url + '&sellerType=' + this.fSellerType;

        fetch(url)
            .then(response => response.json())
            .then(d => {
                this.isLoading = false;
                this.data = d;
            });
    }
}
