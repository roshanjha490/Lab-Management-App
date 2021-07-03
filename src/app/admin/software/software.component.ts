import { Component, OnInit } from "@angular/core";
import { TotalSystemService } from "../../All-Services/total-system.service";
import { SoftwareContentService } from "../../All-Services/software-content.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-software",
  templateUrl: "./software.component.html",
  styleUrls: ["./software.component.css"]
})
export class SoftwareComponent implements OnInit {
  searchTerm: string;

  softwares: {}[];

  softwareLength;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  sftwrePC: number = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private _SoftwareContentService: SoftwareContentService,
    private _TotalSystemService: TotalSystemService
  ) {}

  ngOnInit() {
    this.softwares = this._SoftwareContentService.getsoftwareNameNcolor();

    this.softwareLength = this.softwares.length;

    for (let i = 0; i < this.softwares.length; i++) {
      for (let j = 0; j < this.computers.length; j++) {
        if (
          this.computers[j]["Software"].indexOf(this.softwares[i]["Name"]) > -1
        ) {
          this.sftwrePC++;
        }

        this.softwares[i]["totalSystem"] = this.sftwrePC;
      }

      this.sftwrePC = 0;
    }
  }

  bgColors: string[] = ['#46a34a','#e63b38','#fb8d02','#922aac', '#00c1ed','#46a34a','#e63b38','#fb8d02','#922aac', '#00c1ed'];

  randomNo: number;

  addNewsoftware(param1) {
    this.randomNo = Math.floor(Math.random() * 10);

    if (param1.value == "") {
      param1.classList.add("your-class");

      param1.placeholder = "* Enter a valid Software Name";

      param1.value = "";
    } 
    
    else {
      this._SoftwareContentService.softwareNameNcolor.push({
        Name: param1.value,
        backgroundColor: this.bgColors[this.randomNo],
        totalSystem: 0
      });

      this._snackBar.open(
        param1.value + " has been added to Softwares",
        "Successfully !",
        {
          duration: 2000
        }
      );

      param1.value = "";
    }
  }

  //   goToLab(){

  //     this.router.navigate(['/']);
  //   }
}
