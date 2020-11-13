import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
declare var $: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  date1: Date;
  date2: Date;
  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      contact_name: ['', [Validators.minLength(3)]],
      date_created: this.formBuilder.group({
        start_date: '',
        end_date: ''
      }),
    });

    $('#date_created').datepicker({
      todayHighlight: true,
      templates: {
        leftArrow: '<i class="fa fa-angle-left"></i>',
        rightArrow: '<i class="fa fa-angle -right"></i>'
      }
      // tslint:disable-next-line: only-arrow-functions
    }).on('changeDate', function (ev: any) {
      console.log('event: ', ev);
      console.log('start_date: ', typeof ($('#date_created').data('datepicker').dates[0]));
      console.log('end_date: ', $('#date_created').data('datepicker').dates[1]);

      this.date1 = $('#date_created').data('datepicker').dates[0];
    });

    // $('#date_created').datepicker('getStartDate');

  }

  // tslint:disable-next-line: typedef
  onClick() {
    console.log('start_date: ', this.filterForm.controls.date_created.value.start_date);
    console.log('end_date: ', this.filterForm.controls.date_created.value.end_date);
    console.log('date1: ', this.date1);
  }

}
