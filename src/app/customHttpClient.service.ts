import {HttpBackend, HttpClient, HttpEvent, HttpRequest, XhrFactory} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomHttpClientService {
  constructor(private http: HttpClient) {

  }

  public get(url: string, options?: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.handle(new HttpRequest('GET', url, null, options)).subscribe(
        (result) => {
          resolve(result);
        },
        (err) => {
          this.error({message: 'test error', raw: err});
          reject(err);
        });
    });
  }

  post(url: string, body: any) {

  }

  handle(req: HttpRequest<any>): Observable<any> {
    switch (req.method) {
      case 'GET':
        return this.http.get(req.url);
        break;
      default:
        console.log('default');
        return undefined;
    }
  }

  error(error: any) {

  }
}
