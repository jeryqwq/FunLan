declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare class LinkedList {
    tail: any;
    push: (_:any) => void;
    length: number;
    pop: () => void;
    shift: () => void;
}
declare module 'linkedlist' {
  export = LinkedList;
}
declare type expect = () => ({tobe: (_: boolean) => void})
