import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SearchService]
})
export class AppComponent {
  title = 'app';
  rqdata1 = {
    "currency": "USD",
    "posId": "hbg3h7rf28",
    "orderBy": "price asc, rating desc",
    "roomOccupancies": [
       {
          "occupants": [
             {
                "type": "Adult",
                "age": 25
             },
             {
               "type": "Adult",
                "age": 26
             }
          ]
       }
    ],
    "stayPeriod": {
       "start": "07/12/18",
       "end": "07/19/18"
    },
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
    },
    "travellerCountryCodeOfResidence": "US",
    "travellerNationalityCode": "US",
    "includeHotelsWithoutRates": false,
    "bounds": {
       "circle": {
          "center": {
             "lat": 49.0097,
             "long": 2.5479
          },
          "radiusKm": 50.5
       }
    }
 }
 rqdata2 = {
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

  constructor(private searchService: SearchService, private sessionService: SessionService){}
  onClick(){
    this.searchService.searchInit(this.rqdata1).subscribe(searchInitData=>{
      this.searchService.searchStatus(JSON.stringify({sessionId:searchInitData.sessionId})).subscribe((SearchStatusData)=>{
        this.rqdata2['sessionId'] = searchInitData.sessionId;
        this.searchService.search_results(JSON.stringify(this.rqdata2)).subscribe((result)=>{
          console.log(result);
        },
        error=>alert("Ops some error occured"))
      })
    });
  }
}
