export type ChatListType = {
  num: number;
  creationDate: string;
  creationTime: string;
  sender: string;
  representative: string;
  equipmentOperator: string;
  equipmentRepresentative: string;
  details: string;
};

export type ChatListsType = {
  chat: ChatListType[];
};
