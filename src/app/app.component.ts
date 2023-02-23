import {Component, OnInit} from '@angular/core';
import {AppService} from "./service/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo-plugins';
  socialMedia:any;

  midBox1: any = {title: '', data:[]};
  midBox2: any;

  cardData: any = [];
  graphData: any = {};

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(){
    this.socialMediaData();
    this.midBoxesData();
    this.getCardData();
    this.getChartData();
  }

  socialMediaData(){
    this.appService.getSocialMedia().subscribe(
      (res: any)=>{
        this.socialMedia = res?.Media
      }
    )
  }

  midBoxesData(){
    let title= 'Observations'

    this.appService.getInfoData(title).subscribe(
      (res: any)=>{
        this.midBox1= {title:res?.Title,data: res?.Data}
      }
    )

    this.appService.getStats().subscribe(
      (res: any)=>{
        this.midBox2= res?.Stats
      }
    )
  }

  getCardData(){
    this.appService.getCards().subscribe(
      (res: any)=>{
        this.cardData = res?.Cards
      }
    )
  }

  getChartData(){
    this.graphData = {
      series: [{
        name: 'Today',
        data: [31, 40, 28, 51, 42, 109, 100],
        color: "#252b42"
      },
        {
          name: 'Yesterday',
          data: [11, 32, 45, 32, 34, 52, 41],
          color: "#fdcf6f"
        }],
      colors: ["#252b42", "#fdcf6f"],
      dates:[
        '2023-02-11T05:35:13.795Z',
        '2023-02-12T05:35:13.795Z',
        '2023-02-13T05:35:13.795Z',
        '2023-02-14T05:35:13.795Z',
        '2023-02-15T05:35:13.795Z',
        '2023-02-16T05:35:13.795Z',
        '2023-02-17T05:35:13.795Z'
      ],
      days: 7
    }
  }

}
