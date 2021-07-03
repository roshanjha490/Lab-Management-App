import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareContentService {

  constructor() { }

  searchterm: string = '';


  notification: {}[] = [
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
    { message: ' Nisi distinctio ducimus, accusantium sequi, at fugiat non beatae, iste quae velit nostrum veniam. Provident, reiciendis veniam! Sint!', sender: 'Roshan Jha', seen: false },
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
    { message: ' Nisi distinctio ducimus, accusantium sequi, at fugiat non beatae, iste quae velit nostrum veniam. Provident, reiciendis veniam! Sint!', sender: 'Roshan Jha', seen: false },
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
    { message: ' Nisi distinctio ducimus, accusantium sequi, at fugiat non beatae, iste quae velit nostrum veniam. Provident, reiciendis veniam! Sint!', sender: 'Roshan Jha', seen: false },
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
    { message: ' Nisi distinctio ducimus, accusantium sequi, at fugiat non beatae, iste quae velit nostrum veniam. Provident, reiciendis veniam! Sint!', sender: 'Roshan Jha', seen: false },
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
    { message: ' Nisi distinctio ducimus, accusantium sequi, at fugiat non beatae, iste quae velit nostrum veniam. Provident, reiciendis veniam! Sint!', sender: 'Roshan Jha', seen: false },
    { message: 'Please! Install photoshop in System 32', sender: 'Viru Singh', seen: false },
  ];

  getNotification() {
    return this.notification;
  }


  readedMessages: {}[] = [];

  getreadedMessages() {

    return this.readedMessages;

  }


  Labs: {}[] = [
    {
      Name: 'Student-Lab-1', totalSystem: 0,
    },
    {
      Name: 'Student-Lab-2', totalSystem: 0,
    },
    {
      Name: 'Student-Lab-3', totalSystem: 0,
    },
    {
      Name: 'Teachers', totalSystem: 0,
    },
    {
      Name: 'IT-Department', totalSystem: 0,
    },
    {
      Name: 'Admin & Councellor', totalSystem: 0,
    },
    {
      Name: 'Not In Use', totalSystem: 0,
    },

  ];





  getLabs() {
    return this.Labs;
  }



  softwareNameNcolor: {}[] = [

    { Name: "Photoshop", backgroundColor: "#46a34a", totalSystem: 0 },

    { Name: "Illustrator", backgroundColor: "#e63b38", totalSystem: 0 },

    { Name: "Corel Draw", backgroundColor: "#fb8d02", totalSystem: 0 },

    { Name: "After Effect", backgroundColor: "#922aac", totalSystem: 0 },

    { Name: "Angular", backgroundColor: "#00c1ed", totalSystem: 0 },

    { Name: "AutoCad", backgroundColor: "#46a34a", totalSystem: 0 },

    { Name: "Light Room", backgroundColor: "#e63b38", totalSystem: 0 },

    { Name: "Maya", backgroundColor: "#00c1ed", totalSystem: 0 },

    { Name: "Node.js", backgroundColor: "#fb8d02", totalSystem: 0 },

    { Name: "Premiere", backgroundColor: "#922aac", totalSystem: 0 },

    { Name: "Adobe XD", backgroundColor: "#e63b38", totalSystem: 0 },

    { Name: "InDesign", backgroundColor: "#00c1ed", totalSystem: 0 },

  ];


  getsoftwareNameNcolor() {
    return this.softwareNameNcolor;
  }




  adminAccount: {}[] = [
    { ID: 0, id: 'AD/RH/WM/01', Name: 'Ravi Bhaudhariya', active: false, profileImg: 'assets/06.jpg', password: '9911554411', job: 'Director', joinedIn: '20 May 2019', contact: '9818015894', email: 'contact@ravi.com' },
    { ID: 1, id: 'AD/RH/WM/07', Name: 'John Doe', active: false, profileImg: 'assets/04.jpg', password: '9911554411', job: 'Councelor', joinedIn: '20 May 2019', contact: '9818015894', email: 'kumarroshanjha786@gmail.com' },
    { ID: 2, id: 'AD/RH/WM/08', Name: 'Roshan Jha', active: false, profileImg: 'assets/01.jpg', password: '9911554411', job: 'HR Manager', joinedIn: '20 May 2019', contact: '9818015894', email: 'kumarroshanjha786@gmail.com' },
    { ID: 3, id: 'AD/RH/WM/06', Name: 'Manish Sharma', active: false, profileImg: 'assets/03.jpg', password: '9911554411', job: 'Lab Assistant', joinedIn: '20 May 2019', contact: '9818015894', email: 'kumarroshanjha786@gmail.com' },
  ]

  goadminAccount() {
    return this.adminAccount;
  }

  hardWare: {}[] = [
    { Name: "2GB", totalSystem: 0, },

    { Name: "4GB", totalSystem: 0, },

    { Name: "8GB", totalSystem: 0, },

    { Name: "16GB", totalSystem: 0, },

    { Name: "32GB", totalSystem: 0, },

    { Name: "64GB", totalSystem: 0, },

    { Name: "Optical Mouse", totalSystem: 0, },

    { Name: "KeyBoard", totalSystem: 0, },
  ];

  gethardWare() {
    return this.hardWare;
  }


}

