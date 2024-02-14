import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlchemyService } from 'src/app/services/alchemy.service';
import { AuthService } from 'src/app/services/auth.service';
import { FireBaseFunctionsService } from 'src/app/shared/services/firebase-functions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  constructor(
    private cd: ChangeDetectorRef,
    private auth: AuthService,
    private alchemy: AlchemyService,
    private fbfn: FireBaseFunctionsService,
    private http: HttpClient,
  ) {}
  //  {headers: this.headers}
  // chartOptions: any;
  averageFloorPrices: any[] = [];
  additionalFetchesLimit = 5; // Set the maximum number of additional fetches
  additionalFetchesCount = 0;

  ngOnInit(): void {
    const url =
      'https://www.coingecko.com/nft/veefriends/chart.json?currency=eth&days=7';
    this.http
      .post(
        `https://us-central1-${environment.firebaseConfig.projectId}.cloudfunctions.net/proxyAPI`,
        {
          url: 'https://www.coingecko.com/nft/veefriends/chart.json?currency=eth&days=7',
        }
      )
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  headers = new HttpHeaders()
    .set('accept', 'application/json') // You can add more headers as needed
    .set('x-api-key', '25c1a98d179647ccb18b3fc807b16586'); // Example: Adding an authorization token

  data = [
    [1703922313000, 1.8300208984849031],
    [1703922626000, 1.8300208984849031],
    // Add more data points
  ];

  // Initialize ApexCharts configuration
  chartOptions: any = {
    chart: {
      type: 'line',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
    },
    series: [
      {
        name: 'ETH Price',
        data: this.data.map(([timestamp, price]) => ({
          x: timestamp,
          y: price,
        })),
      },
    ],
    title: {
      text: 'ETH Price over Time',
    },
  };
  // ngOnInit(): void {
  //   this.fetchDataWithPagination('https://api.opensea.io/api/v2/events/collection/veefriends?event_type=sale&limit=10');
  // }

  // fetchDataWithPagination(url: string): void {
  //   const oneYearAgoTimestamp = Math.floor(Date.now() / 1000) - 365 * 24 * 60 * 60;
  //   const apiUrl = `${url}&before=${oneYearAgoTimestamp}`;

  //   this.http.get(apiUrl, {headers: this.headers}).subscribe((data: any) => {
  //     const assetEvents = data.asset_events;

  //     // Create an object to store data for each day
  //     const dailyData:any = {};

  //     assetEvents.forEach((event:any) => {
  //       if (event.event_type === 'sale') {
  //         const timestamp = event.event_timestamp * 1000; // Convert Unix timestamp to milliseconds
  //         const date = new Date(timestamp);
  //         const dateString = date.toISOString().split('T')[0]; // Extract date in "YYYY-MM-DD" format

  //         // Calculate the price in ETH
  //         const priceInEth = parseFloat(event.payment.quantity) / Math.pow(10, event.payment.decimals);

  //         // Initialize or update the daily data for this day
  //         if (!dailyData[dateString]) {
  //           dailyData[dateString] = {
  //             totalSales: 0,
  //             saleCount: 0,
  //           };
  //         }

  //         // Update daily data with the sale
  //         dailyData[dateString].totalSales += priceInEth;
  //         dailyData[dateString].saleCount++;
  //       }
  //     });

  //     if (data.next && this.additionalFetchesCount < this.additionalFetchesLimit) {
  //       // Append the "next" cursor to the URL for the next page
  //       const nextCursor = encodeURIComponent(data.next);
  //       const nextUrl = `${url}&before=${oneYearAgoTimestamp}&next=${nextCursor}`;

  //       // Fetch the next page of data
  //       this.additionalFetchesCount++;
  //       this.fetchDataWithPagination(nextUrl);
  //     } else {
  //       // All data has been fetched, now convert daily data to chart-friendly format
  //       const chartData = Object.keys(dailyData).map((dateString) => {
  //         const date = new Date(dateString);
  //         const timestamp = date.getTime();
  //         const averagePrice = dailyData[dateString].totalSales / dailyData[dateString].saleCount;
  //         return [timestamp, averagePrice];
  //       });

  //       this.chartOptions = {
  //         chart: {
  //           type: 'area',
  //           stacked: false,
  //         },
  //         xaxis: {
  //           type: 'datetime',
  //           title: {
  //             text: 'Time',
  //           },
  //         },
  //         yaxis: {
  //           title: {
  //             text: 'Average Price (ETH)',
  //           },
  //           labels: {
  //             formatter: function (value:any) {
  //               return value.toFixed(2); // Format labels with 2 decimal places
  //             },
  //           },
  //         },
  //         series: [
  //           {
  //             name: 'Average Price',
  //             data: chartData,
  //           },
  //         ],
  //       };
  //     }
  //   });

  //   setTimeout(() => {
  //     this.cd.detectChanges();
  //   }, 2000);
  // }

  roundToHalf(value: number): number {
    return Math.round(value * 2) / 2;
  }
}
