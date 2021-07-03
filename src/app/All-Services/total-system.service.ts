import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalSystemService {

  constructor() { }

  allSystem: {}[] = [
    { "id": 0, "Name": "System-1", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Mac OS" },
    { "id": 1, "Name": "System-2", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Mac OS" },
    { "id": 2, "Name": "System-3", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["2GB", "8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 3, "Name": "System-4", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["4GB", "8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 4, "Name": "System-5", "Lab": "Student-Lab-1", "Software": ["Photoshop", "AutoCad", "Light Room", "Maya", "Premiere", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Mac OS" },
    { "id": 5, "Name": "System-6", "Lab": "Student-Lab-1", "Software": ["Photoshop", "AutoCad", "Light Room", "Maya", "Premiere", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Mac OS" },
    { "id": 6, "Name": "System-7", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Corel Draw", "Premiere", "InDesign"], "Condition": "Not Working", "Company": "Del", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Windows 8" },
    { "id": 7, "Name": "System-8", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "Del", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 8, "Name": "System-9", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Not Working", "Company": "Del", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 9, "Name": "System-10", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "Del", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 10, "Name": "System-11", "Lab": "Student-Lab-1", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "Del", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 11, "Name": "System-12", "Lab": "Student-Lab-2", "Software": ["Photoshop", "After Effect", "AutoCad", "Light Room", "Maya", "Premiere"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 12, "Name": "System-13", "Lab": "Student-Lab-2", "Software": ["Photoshop", "After Effect", "AutoCad", "Light Room", "Maya", "Premiere"], "Condition": "Not Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 13, "Name": "System-14", "Lab": "Student-Lab-2", "Software": ["Photoshop", "After Effect", "AutoCad", "Light Room", "Maya", "Premiere"], "Condition": "Working", "Company": "HP", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 14, "Name": "System-15", "Lab": "Student-Lab-2", "Software": ["Photoshop", "After Effect", "AutoCad", "Light Room", "Maya", "Premiere"], "Condition": "Not Working", "Company": "HP", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 15, "Name": "System-16", "Lab": "Student-Lab-2", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 16, "Name": "System-17", "Lab": "Student-Lab-2", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 17, "Name": "System-18", "Lab": "Student-Lab-2", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 18, "Name": "System-19", "Lab": "Student-Lab-2", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Not Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 19, "Name": "System-20", "Lab": "Student-Lab-3", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "DEL", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 20, "Name": "System-21", "Lab": "Student-Lab-3", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "DEL", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 21, "Name": "System-22", "Lab": "Student-Lab-3", "Software": ["Photoshop", "Illustrator", "Angular", "Node.js", "Adobe XD"], "Condition": "Not Working", "Company": "DEL", "hardWare": ["2GB", "4GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 22, "Name": "System-23", "Lab": "Teachers", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Light Room", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 23, "Name": "System-24", "Lab": "Teachers", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "AutoCad", "Light Room", "Maya", "Node.js", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 24, "Name": "System-25", "Lab": "Teachers", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "AutoCad", "Light Room", "Maya", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["32GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 25, "Name": "System-26", "Lab": "Teachers", "Software": ["Angular", "Node.js", "Adobe XD"], "Condition": "Working", "Company": "HP", "hardWare": ["8GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 26, "Name": "System-27", "Lab": "Teachers", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Angular", "AutoCad", "Light Room", "Maya", "Node.js", "Premiere", "Adobe XD", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Mac OS" },
    { "id": 27, "Name": "System-28", "Lab": "IT-Department", "Software": ["Photoshop", "Illustrator"], "Condition": "Working", "Company": "HP", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Windows 8" },
    { "id": 28, "Name": "System-29", "Lab": "IT-Department", "Software": ["Photoshop", "Illustrator", "Corel Draw", "Angular", "Node.js"], "Condition": "Working", "Company": "HP", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 29, "Name": "System-30", "Lab": "IT-Department", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "HP", "hardWare": ["16GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 30, "Name": "System-30", "Lab": "Admin & Councellor", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Premiere", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 31, "Name": "System-31", "Lab": "Admin & Councellor", "Software": ["Photoshop", "Illustrator", "Corel Draw", "After Effect", "Angular", "AutoCad", "Light Room", "Maya", "Node.js", "Premiere", "Adobe XD", "InDesign"], "Condition": "Working", "Company": "Apple", "hardWare": ["64GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 32, "Name": "System-32", "Lab": "Not In Use", "Software": ["Photoshop", "Illustrator", "Corel Draw"], "Condition": "Not In Use", "Company": "Del", "hardWare": ["2GB", "4GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 33, "Name": "System-33", "Lab": "Not In Use", "Software": ["Photoshop", "Illustrator", "Corel Draw"], "Condition": "Not In Use", "Company": "Del", "hardWare": ["2GB", "4GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" },
    { "id": 34, "Name": "System-34", "Lab": "Not In Use", "Software": ["Photoshop", "Illustrator", "Corel Draw"], "Condition": "Not In Use", "Company": "Del", "hardWare": ["2GB", "4GB", "Optical Mouse", "KeyBoard"], "os": "Windows 10" }
  ];

  getAllSystem() {
    return this.allSystem;
  }

  totalNumberOfLab: number;

  gettotalNumberOfLab() {

    return this.totalNumberOfLab;

  }

}
