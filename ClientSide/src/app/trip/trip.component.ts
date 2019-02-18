import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../DataService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})
export class TripComponent implements OnInit {

    constructor(){

    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

    

}