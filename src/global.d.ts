export type Renderable =
  | string
  | number
  | ReactNode
  | ReactElement
  | Renderable[];

export type ChildrenProps = { children: Renderable };
