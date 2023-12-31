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
  isReplying: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
      this.isReplying = false;
    }
  }

  toggleReply() {
    if (this.isReplying) {
      return;
    }

    this.isReplying = true;
    this.isExpanded = true;
  }
}
