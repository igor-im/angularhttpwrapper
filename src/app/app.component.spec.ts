import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import CustomHttpClientService from './customHttpClient.service';

describe('AppComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let fixture;
  let app;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpClient, CustomHttpClientService ],
      declarations: [AppComponent]
    }).compileComponents()

      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularhttpwrap'`, fakeAsync(() => {
    app.getData().then(() => {
      expect(app.title).toEqual('delecus aut autem');
    });
    tick();
    fixture.detectChanges();
    console.log(app.title)
  }));
});
