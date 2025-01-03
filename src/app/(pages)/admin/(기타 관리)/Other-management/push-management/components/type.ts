export type EquipmentBusinessType = {
  businessName: string;
  classifiacation: string;
  exponent: string;
  office: string[];
  ownedEquipment: string;
  articlesHeld: string;
  division: string[];
  workArea: string[];
};

export type PushType = {
  num: number;
  creationDateTime: string;
  title: string;
  situation: string;
  numOfShipments: number;
  numOfSuccess: number;
  numOfFailures: number;
  registrationDateTime: string;
  manager: string;
};

export type OrderingCompanyType = {
  num: number;
  registration: {
    date: string;
    time: string;
  };
  lastAccessed: {
    date: string;
    time: string;
  };
  division: string;
  businessName: string;
  individualOrCompany: string;
  exponent: string;
  contact: string;
  accountStatus: string;
  subscriptionPath: string;
};
