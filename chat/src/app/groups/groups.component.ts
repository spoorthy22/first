import { Component, OnInit } from '@angular/core';

import { Groups } from '../groups';
import { GroupsService } from '../groups.service'


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  group: Groups;
  groups: Groups[];
  selectedGroups: Groups;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
  	this.getGroups();
  }

  getGroups(): void {
  	this.groupsService.getGroups()
  	.subscribe(groups => this.groups = groups);
  }

  add(userid: number, groupid: number, groupname: string): void {
  	groupname = groupname.trim();
  	if(!groupname ) { return; }
  	this.groupsService.addGroups({ userid,groupid,groupname } as Groups)
  	.subscribe(group => {
  		this.groups.push(group);
  	});
  }

  delete(group: Groups ): void{
  	this.groups = this.groups.filter(g => g !== group);
  	this.groupsService.deleteGroups(group).subscribe;
  }

  onSelect(group: Groups): void {
    this.selectedGroups = group;
  }
}
