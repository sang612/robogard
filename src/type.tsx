export interface SmallSectionItemType {
  title: string;
  desc: string;
  iconUrl: string;
  buttonText?: string;
  className?: string;
  id?: number;
}

export interface SmallSectionProps {
  listSmallSectionItem: SmallSectionItemType[];
}
export interface OurMainServicesProps {
  listOurMainServices: SmallSectionItemType[];
}

export interface WhatClientsSayingItemType {
  comment: string;
  imageUrl: string;
  name: string;
  deparment: string;
  id?: number;
}
export interface WhatClientsSayingProps {
  listWhatClientsSaying: WhatClientsSayingItemType[];
}

export interface BlogItemType {
  title: string;
  desc: string;
  imageUrl: string;
  type: string;
  id?: number;
}
export interface BlogProps {
  listBlogItem: BlogItemType[];
}

export interface CounterItemType {
  index: number;
  icon: string;
  number: number;
  text: string;
}
export interface CounterProps {
  itemList: CounterItemType[];
}
