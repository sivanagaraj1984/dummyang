import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleDetailType } from './vehicle-detail.type';

@Component({
    selector: 'app-vehicle-detail',
    templateUrl: './vehicle-detail.component.html',
    styleUrls: [ './vehicle-detail.component.css' ]
})
export class VehicleDetailComponent implements OnInit {
    public data!: VehicleDetailType;
    public isLoading = true;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        fetch('http://localhost:5000/api/vehicle?id='+ id)
            .then(response => response.json())
            .then(d => {
                console.log(d);
                this.data = d;
                this.isLoading = false;
            });
    }
}
