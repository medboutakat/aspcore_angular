import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import { InvoiceHeader } from 'src/Models/Commande';
// import { InvoiceHeader } from 'src/Models/Commande';
import { IDataService } from '../DataService/IDataService'; 


@Component({
  selector: 'app-commande-edit',
  templateUrl: './commande-edit.component.html',
  styleUrls: ['./commande-edit.component.sass']
})
export class CommandeEditComponent implements OnInit {

  constructor(private dataservice: IDataService<InvoiceHeader>, private route: Router) {

  }

  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() { 
  }

  @Input() reset: boolean = false;
  @ViewChild('editcomponent') myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objtempemp: InvoiceHeader;
  @Input() objemp: InvoiceHeader = new InvoiceHeader();

  EditMainObject(regForm: NgForm) {
    if(!this.IsNew){
      this.dataservice.EditEmployee(this.objemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      });
    }else{
         
        this.objtempemp=new InvoiceHeader();
        this.objtempemp.code=regForm.value.code;
        this.objtempemp.date=regForm.value.date;   

        this.dataservice.AddObject(this.objtempemp).subscribe(res=>{
          alert("Vat Added successfully");
            this.TakeHome();
          }
        )
    }
   
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('commande');
  }


}

