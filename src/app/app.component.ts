import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo-plugins';
  socialMedia:any;

  midBox1: any;
  midBox2: any;

  cardData: any;
  graphData: any;

  ngOnInit(){
    this.socialMediaData();
    this.midBoxesData();
    this.getCardData();
    this.getChartData();
  }

  socialMediaData(){
    this.socialMedia=[
      {src: '../assets/images/Google.png', label: 'Google'},
      {src: '../assets/images/Foursquare.png', label: 'Foursquare'},
      {src: '../assets/images/Kickstarter.png', label: 'Kickstarter'},
      {src: '../assets/images/KakaoTalk.png', label: 'Talk'}
    ]
  }

  midBoxesData(){

    this.midBox1 = {
      title: 'Observations',
      data:[
        {name: 'Taylor Swift', avatar: '../assets/images/ts.jpg', progress: 75,ratings: 3, time: '2023-02-15T04:09:06.583Z', left: '2'},
        {name: 'Will Smith', avatar: '../assets/images/ws.jpg', progress: 85,ratings: 1, time: '2022-02-17T06:07:06.584Z', left: '5'},
        {name: 'Johnson', avatar: '../assets/images/mj.jpg', progress: 69,ratings: 4, time: '2021-03-14T05:06:09.585Z', left: '8'},
        {name: 'Anne Hathway', avatar: '../assets/images/ah.jpg', progress: 68,ratings: 3, time: '2020-09-13T09:01:00.586Z', left: '7'},
        {name: 'Bella Swann', avatar: '../assets/images/br.jpg', progress: 55,ratings: 0, time: '2018-09-19T02:03:08.587Z', left: '10'},
        {name: 'Mark Twian', avatar: '../assets/images/mt.jpg', progress: 99,ratings: 5, time: '2002-01-12T03:03:03.581Z', left: '1'},
        {name: 'Xavier Dohettery', avatar: '../assets/images/xd.png', progress: 25,ratings: 3, time: '2012-12-15T06:17:06.584Z', left: '7'},
        {name: 'Minato Namikaze', avatar: '../assets/images/mn.jpg', progress: 100,ratings: 5, time: '2012-12-12T06:03:02.580Z', left: '50'},
        {name: 'Parus Suthar', avatar: '', progress: 50,ratings: 2, time: '2022-12-15T02:07:03.584Z', left: '8'},
        {name: 'Marina Uzumaki', avatar: '../assets/images/ms.jpg', progress: 94,ratings: 4, time: '2022-02-12T06:01:03.583Z', left: '15'},
        {name: 'Dani Morrison', avatar: '../assets/images/dd.jpeg', progress: 81,ratings: 3, time: '2016-03-15T06:07:06.583Z', left: '7'},
        {name: 'Omar Bradley', avatar: '../assets/images/ob.jpg', progress: 65,ratings: 5, time: '2014-06-14T06:08:04.589Z', left: '67'},
      ]
    }

    this.midBox2 = [
      {icon: 'pi-shopping-cart', progress: 51, label: 'Shopping', icon_color:'#fdcf6f', icon_background:'#ffeada', active: true},
      {icon: 'pi-truck', progress: 51, label: 'Electronics', icon_color:'#22a447', icon_background:'#ddf9e4', active: true},
      {icon: 'pi-car', progress: 51, label: 'Travels', icon_color:'#31374e', icon_background:'#e4f0ff', active: true},
      {icon: 'pi-user-plus', progress: 51, label: 'Customer Added', icon_color:'#22a447', icon_background:'#e4f0ff', active: true},
      {icon: 'pi-user-minus', progress: 51, label: 'Customer Removed', icon_color:'#CD0404', icon_background:'#e4f0ff', active: true}
    ]
  }

  getCardData(){
    this.cardData = [
      { heading: 'Total Balance', value: '$2256', interval: '15 Minutes' },
      { heading: 'Total Sales', value: '24', interval: '45 Minutes' },
      { heading: 'Total Expenses', value: '$12', interval: 'hour'},
      { heading: 'Total Visitors', value: '3', interval: '5 Minutes' },
    ]
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
