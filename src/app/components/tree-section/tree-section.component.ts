import { Component, Input, signal } from '@angular/core';
import { INode } from '../../models/tree-nodes.interface';
import { NgClass } from '@angular/common';
import { TreeItemComponent } from '../tree-item/tree-item.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { StandartButtonComponent } from '../UI/standart-button/standart-button.component';

@Component({
  selector: 'app-tree-section',
  imports: [TreeItemComponent, StandartButtonComponent],
  templateUrl: './tree-section.component.html',
  styleUrl: './tree-section.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class TreeSectionComponent {
  @Input() parentNode: null | INode = null;
  @Input() nodes?: INode[];
  openNodes = signal<{ [title: string]: boolean }>({});

  openTree(node: INode) {
    this.openNodes.update((opensNodes) => {
      return {
        ...opensNodes,
        [node.title]: !opensNodes[node.title],
      };
    });
  }
  showId(event: INode) {
    console.log(`нажали на узел ID ${event.id}`);
  }
  checkOpen(node: INode) {
    return !!this.openNodes()[node.title];
  }
  logParent() {}
}
