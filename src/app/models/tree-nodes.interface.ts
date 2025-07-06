export interface INode {
  id: number;
  title: string;
  is_deleted: boolean;
  deleted_at?:null|string,
  children: INode[];
}
