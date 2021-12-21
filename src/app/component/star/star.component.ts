import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  rank: number = 0;
  @Input() isClickable: boolean = true;
  @Output() onRank = new EventEmitter<any>();
  clicked: boolean = false;
  hover: boolean = false;
  rankHovered: number = 0;
  faStar = faStar;

  constructor() {
  }

  ngOnInit(): void {
    this.clicked = true;
    this.hover = true;
  }

  mouseEnter(s: number) {
    if (this.isClickable) {
      this.hover = true;
      this.rankHovered = s;
    }
  }

  mouseLeave() {
    if (this.isClickable) {
      this.rankHovered = 0;
      if (!this.clicked) {
        this.reset();
      }
    }
  }

  onClick(s: number) {
    if (this.isClickable) {
      this.clicked = true;
      if (this.rank !== s) {
        this.hover = true;
        this.rank = s;
      } else if (this.rank === s && this.rank !== 0) {
        this.rankHovered--;
        this.rank--;
      }
      this.onRank.emit(this.rank);
    }
  }

  classHover(s: number) {
    let a = this.hover && (s <= this.rankHovered || s <= this.rank);
    return a ? 'fas fa-star d-inline hover-fa-icon' : 'fas fa-star d-inline';
  }

  reset() {
    this.clicked = false;
    this.hover = false;
    this.rankHovered = 0;
  }
}
