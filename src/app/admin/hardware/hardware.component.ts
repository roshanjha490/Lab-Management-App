import { Component, OnInit } from "@angular/core";
import { TotalSystemService } from "../../All-Services/total-system.service";
import { SoftwareContentService } from "../../All-Services/software-content.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-hardware",
  templateUrl: "./hardware.component.html",
  styleUrls: ["./hardware.component.css"]
})
export class HardwareComponent implements OnInit {
  searchTerm: string;

  hardwares: {}[];

  hardwareLength;

  computers: {}[] = this._TotalSystemService.getAllSystem();

  hrdwrePC: number = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private _SoftwareContentService: SoftwareContentService,
    private _TotalSystemService: TotalSystemService
  ) {}

  ngOnInit() {
    this.hardwares = this._SoftwareContentService.gethardWare();

    this.hardwareLength = this.hardwares.length;

    for (let i = 0; i < this.hardwares.length; i++) {
      for (let j = 0; j < this.computers.length; j++) {
        if (
          this.computers[j]["hardWare"].indexOf(this.hardwares[i]["Name"]) > -1
        ) {
          this.hrdwrePC++;
        }

        this.hardwares[i]["totalSystem"] = this.hrdwrePC;
      }

      this.hrdwrePC = 0;
    }
  }

  addNewhardware(param1) {
    if (param1.value == "") {
      param1.classList.add("your-class");

      param1.placeholder = "* Enter a valid Lab Name";

      param1.value = "";
    } else {
      this._SoftwareContentService.gethardWare().push({
        Name: param1.value,
        totalSystem: 0
      });

      this._snackBar.open(
        param1.value + " has been added to Hardwares",
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
