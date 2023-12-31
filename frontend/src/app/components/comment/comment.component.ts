import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  isLiked: boolean = false;
  isExpanded: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
