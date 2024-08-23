import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading = new BehaviorSubject<boolean>(false);

  isLoading$: Observable<boolean> = this._isLoading.asObservable();

  setLoading(isLoading: boolean) {
    this._isLoading.next(isLoading);
  }
}