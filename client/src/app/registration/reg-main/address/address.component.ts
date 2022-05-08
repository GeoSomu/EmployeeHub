import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slider } from 'src/app/shared/common/route-animations';
import { UrlContants } from 'src/app/shared/common/url.contant';
import { Cities, Countries } from 'src/app/shared/models/csc.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { RegistartionService } from 'src/app/shared/services/registartion.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  animations: [ slider ]
})
export class AddressComponent implements OnInit, OnDestroy {

  public addressInformation: any;
  public countrires: Countries[] = [];
  public states: Countries[] = [];
  public cities: Cities[] = [];
  private subscriptions: Subscription | undefined;
  public isSelectedCoutryName: boolean = false;
  public isSelectedStateName: boolean = false;
  public isSelectedCityName: boolean = false;
  public countryIso2: string = "";
  public stateIso2: string = "";

  constructor(private router: Router,
    private registrationService: RegistartionService,
    private httpService: HttpService,
    private urlConstant: UrlContants) { }

  ngOnInit(): void {
    this.addressInformation = this.registrationService.getEmployeeInformation().address;
    const countriesApiActionUrl = this.urlConstant.getAllCountries;
    this.subscriptions = this.httpService.getAllCountriesDetails(countriesApiActionUrl)
      .subscribe((res: any) => {
        this.countrires = res;
    });
  }

  public onSelectCountryName(value: any){
    this.isSelectedCoutryName = true;
    const countryISO2 = value?.iso2;
    const stateByCountryISO2ActionUrl = `${this.urlConstant.getAllCountries + countryISO2}/states`;
    this.subscriptions = this.httpService.getAllCountriesDetails(stateByCountryISO2ActionUrl)
      .subscribe((res :any) => {
        this.states = res;
      });

    this.countryIso2 = countryISO2;
  }

  public onSelectStateName(value: any) {
    this.isSelectedStateName = true;
    const stateISO2 = value?.iso2;
    const cityByStateNameActionUrl = this.urlConstant.getAllCountries + this.countryIso2 + "/states/" + stateISO2 + "/cities";
    this.subscriptions = this.httpService.getCityNameByStateByCountry(cityByStateNameActionUrl)
      .subscribe((res: any) => {
        this.cities = res;
      })
  }

  public previousPage(){
    this.router.navigate(['registration/personal'])
  }

  public nextPage(){
    this.router.navigate(['registration/organization'])
  }

  ngOnDestroy(): void {
      this.subscriptions?.unsubscribe();
  }
}
