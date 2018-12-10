import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/Commande';
// import { IDataService } from '../DataService/IDataService';
import { Router } from '@angular/router'; 
import { IDataService } from '../DataService/IDataService';
import { Observable } from 'rxjs';
import { CommandeEditComponent } from '../commande-edit/commande-edit.component';

@Component({
  selector: 'app-vat',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.sass']
})
export class CommandeComponent implements OnInit {
  
    objlist: any;
    dataavailbale: Boolean = false;
    action:string;
    tempemp: InvoiceHeader;
  

    
    constructor(private dataserv:IDataService<InvoiceHeader>, private route: Router) {
      
    }
  
    getName() :String{
      return ((<any>this).constructor.name).replace("Component","").toLowerCase(); 
    } 
    getNameEdit() {
      return typeof(this); 
    } 

    @ViewChild('editcomponent') editcomponent;

    ngOnInit() { 
      this.editcomponent=this.getNameEdit();
      this.LoadData();
    }
  
    LoadData() { 
      this.dataserv.getEmployee("InvoiceHeaders").subscribe((tempdate) => {
        this.objlist = tempdate;
        console.log(this.objlist);
        if (this.objlist.length > 0) {
          this.dataavailbale = true;
        }
        else {
          this.dataavailbale = false;
        }
      }), err => {
          console.log(err);
        }
     
      }
    deleteconfirmation(id: string) {
  
      // if (confirm("Are you sure you want to delete this ?")) {
      //   this.tempemp = new Vat();
      //   this.tempemp.id = id;
      //   this.dataservce.DeleteVat(this.tempemp).subscribe(res => {
      //     alert("Deleted successfully !!!");
      //     this.LoadData();
      //   })
      // }
    }

 
  
    loadAddnew() {
      this.action="add vat";
      this.editcomponent.objemp.code = ""
      this.editcomponent.objemp.value = "" 
      this.editcomponent.objemp.id = "" 
      this.editcomponent.IsNew=true;
    }
  
    loadnewForm(id: string, code: string, date: string) {
      this.editcomponent.IsNew=false;
      this.action="Edit vat : "+code;
      console.log(code);
      this.editcomponent.objemp.code = code
      this.editcomponent.objemp.date = date 
      this.editcomponent.objemp.id = id  
    }
  
    RefreshData() {
      this.LoadData();
    }
  
}
