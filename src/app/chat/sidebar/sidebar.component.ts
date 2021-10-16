import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {name:"dfs", time:"10:00 pm", latestMessage: "Good Morning!", latestMessageRead: false},
    {name:"ravi", time:"10:00 am", latestMessage: "Hello", latestMessageRead: true},
    {name:"ramesh", time:"09:00 pm", latestMessage: "Good evng", latestMessageRead: false},
    {name:"rajesh", time:"04:20 pm", latestMessage: "Hii", latestMessageRead: true},
    {name:"ajith", time:"10:00 pm", latestMessage: "Hello", latestMessageRead: true},
    {name:"surendra", time:"08:30 am", latestMessage: "Hmm", latestMessageRead: false},
    {name:"venu", time:"11:00 pm", latestMessage: "Good Morning!", latestMessageRead: true},
    {name:"srinu", time:"08:22 am", latestMessage: "Good Morning!", latestMessageRead: false},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
