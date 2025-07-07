import { Component } from '@angular/core';
import { TreeSectionComponent } from '../../components/tree-section/tree-section.component';
import { TREE_NODES } from '../../shared/data/tree-nodes-data';
import { INode } from '../../models/tree-nodes.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-trees-page',
  imports: [TreeSectionComponent],
  templateUrl: './trees-page.component.html',
  styleUrl: './trees-page.component.scss',
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
export class TreesPageComponent {
  nodes: INode[] = TREE_NODES;
}
