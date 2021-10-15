import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class AppCalendar implements OnInit {
  
  constructor() { }

  week: any = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  monthSelect: any[] = [];
  dateSelect: any = moment().format('YYYY-MMMM');
  dateValue: any;
  currentdate: any = moment().format('YYYY-MMMM')

  ngOnInit(): void {
    const month =  moment().format('MM')
    const year =  moment().format('Y')
    this.getDaysFromDate(month, year)
  }
  getDaysFromDate(month: any, year:any) {
    const startDate = moment.utc(`${year}/${month}`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate
    const diffDays = endDate.diff(startDate, 'days') + 1
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((dayforday: any) => {
      dayforday = parseInt(dayforday) + 1;
      const dayObject = moment(`${year}-${month}-${dayforday}`);
      return {
        name: dayObject.format("dddd"),
        value: dayforday,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag:any) {
    if (flag < 0) {
      const prevDate = this.dateSelect.subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day:any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }

}
