import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Flight} from "../../entities/flight";
import { FlightService } from '../services/flight.service';

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent {

    id: string;
    flight: Flight;

    constructor(
        private route: ActivatedRoute,
        private flightService: FlightService
    ) {
    }

    ngOnInit() {

        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.flightService.findById(this.id).subscribe(
                (flight) => {
                    this.flight = flight;
                },
                (err) => {
                    console.error(err);
                }
            )

        });



        /*
        this.route.data.subscribe((d) => {
            this.flight = d['flight'];
        })
        */
    }

    save() {
        console.debug('not implemented yet!')
    }

}