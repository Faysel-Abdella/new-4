 export interface StaticsCardProps {
    title: string;
    content?: string;
    containerStyles?: string;
    titleStyles?: string;
    titleContainerStyles?:string
    contentContainerStyles?:string
    numenatorContentStyles?: string;
    denomenatorContentStyles?:string
  }
  interface content {
    amount: string;
    status: string;
  }
  export interface StatusStaticCardProps {
    items: content[];
    containerStyles?: string;
    title: string;
    titleStyles?: string;
    titleContainerStyles?: string;
    contentStyles?:string
    contentContainerStyles?: string;
  }