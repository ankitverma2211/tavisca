import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';


export class SessionService{
    private sessionId ;

    constructor(){};

    getSessionId(){
        return this.sessionId;
    }

    setSessionId(sessionId){
        this.sessionId = sessionId;
    }

    
}