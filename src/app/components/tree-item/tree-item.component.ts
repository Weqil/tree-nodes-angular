import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INode } from '../../models/tree-nodes.interface';
import { StandartButtonComponent } from '../UI/standart-button/standart-button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tree-item',
  imports: [StandartButtonComponent, NgClass],
  templateUrl: './tree-item.component.html',
  styleUrl: './tree-item.component.scss',
})
export class TreeItemComponent {
  @Input() node!: INode;
  @Input() disabled: boolean = false;
  @Input() open:boolean = false
  @Input() showIdButton:boolean = true
  @Input() showCount:boolean = false
  @Input() countNodes: number = 0
  @Output() isOpen = new EventEmitter<INode>();
  @Output() idButtonClicked = new EventEmitter<INode>();
  openChange() {
    this.isOpen.emit(this.node);
  }
  idButtonClickedChange() {
    this.idButtonClicked.emit(this.node);
  }
  get itemStyles(): string[] {
    return [this.disabled ? 'disabled' : ''];
  }
}
