import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      contact_name: ['', [Validators.minLength(3)]],
      date_created: this.formBuilder.group({
        start_date: '',
        end_date: ''
      }),
    });
  }

}
