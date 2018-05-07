import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';


export class ApiData{
    private searchInitData = {
        "currency": "USD",
        "posId": "hbg3h7rf28",
        "orderBy": "price asc, rating desc",
        "roomOccupancies": [
           {
              "occupants": [
                 {
                    "type": "Adult",
                    "age": 25
                 }
              ]
           }
        ],
        "stayPeriod": {
           "start": "09/12/2018",
           "end": "09/13/2018" //mm/dd/yyyy ( FUTURE DATES )
        },
           "bounds": {
           "circle": {
              "center": {
                 "lat": 49.0097, // Selected location lat long
                 "long": 2.5479
              },
              "radiusKm": 50.5
           }
        }
     }
     

    private searchStatusData = {
        "paging": {
           "pageNo": 1,
           "pageSize": 1,
           "orderBy": "price asc, rating desc"
        },
        "optionalDataPrefs": [
           "All"
        ],
        "currency": "USD",
        "contentPrefs": [
          "Basic",
          "Activities",
          "Amenities",
          "Policies",
          "AreaAttractions",
          "Descriptions",
          "Images",
          "CheckinCheckoutPolicy",
          "All"
        ],
        "filters": {
           "minHotelPrice": 1,
           "maxHotelPrice": 10000,
           "minHotelRating": 1,
           "maxHotelRating": 5,
           "hotelChains": [
              "Novotel",
              "Marriott",
              "Hilton",
              "Accor"
           ],
           "allowedCountry": "FR"
        }
    }

    constructor(){};

    getSerachApiInitData(){
        return this.searchInitData;
    }
    getSesearchStatusData(){
        return this.searchStatusData;
    }
    
}

