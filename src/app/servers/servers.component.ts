import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowSever:boolean = true;
  //allowUser:boolean = true;
  serverCreationStatus = 'No Server Created';
  serverName = 'test server';
  serverCreated = false;
  userName = "";
  servers = ['Test Server', 'Test Server 2'];
  constructor() { 
    setTimeout(()=>{
      this.allowSever = false;
    },2000);
    
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created and name is:'+this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  addUserName(){
    this.userName='';
  }
}
