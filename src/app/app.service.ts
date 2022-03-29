import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
}
