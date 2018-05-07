import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { SessionService } from './shared/session.service';
import { NgForm } from '@angular/forms';
import { ApiData } from './shared/apiData.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SearchService, ApiData]
})
export class AppComponent {
  title = 'app';
  showResultCards = false;
  hotel = {};
  
  constructor(private searchService: SearchService, private sessionService: SessionService, private apiData: ApiData){}
  search(form: NgForm){
    /*console.log(form.value) -->  we are getting the form values here . 
    We can use them but for now I am using a service and cost data from there as my form does 
    not have as much value as the Api needs*/
    this.searchService.searchInit(this.apiData.getSerachApiInitData()).subscribe(searchInitData=>{
      this.showResultCards = false
      this.searchService.searchStatus(JSON.stringify({sessionId:searchInitData.sessionId})).subscribe((SearchStatusData)=>{
        let searchStausData = this.apiData.getSesearchStatusData();
        searchStausData['sessionId'] = searchInitData.sessionId;
        this.searchService.search_results(JSON.stringify(searchStausData)).subscribe((result)=>{
          this.showResultCards =true;
          this.hotel = result.hotels[0];
        },
        error=>alert("Ops some error occured"))
      })
    });
    
  }
}
