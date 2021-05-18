import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class DataService {

    public store = new BehaviorSubject(new Map<string, object>());
    currentStore = this.store.asObservable();
  
    constructor() { }

    changeStore(store: Map<string, object>) {
        this.store.next(store);
    }

    appendStore(newData: Map<string, object>) {
        let mergedStore: Map<string, object> = new Map([...this.store.value, ...newData]);
        this.store.next(mergedStore);
    }
}