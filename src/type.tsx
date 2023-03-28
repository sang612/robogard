export interface SmallSectionItemType {
  title: string;
  desc: string;
  iconUrl: string;
  buttonText?: string;
  className?: string;
  id?: number;
  borderBColor?: string;
  buttonClassName?: string;
}

export interface SmallSectionProps {
  listSmallSectionItem: SmallSectionItemType[];
}
export interface OurMainServicesProps {
  listOurMainServices: SmallSectionItemType[];
  dotSliderColor?: string;
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
  dotSliderColor?: string;
}

export interface BlogItemType {
  title: string;
  desc: string;
  imageUrl: string;
  type: string;
  id?: number;
  textColor?: string;
  iconColor?: string;
  buttonClassName?: string;
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
  titleColor?: string;
  beforeColor?: string;
}

export interface BannerProp {
  className: string;
  title: string;
  title2: string;
  desc: string;
  titleColor?: string;
  title2Color?: string;
  descColor?: string;
  hasBefore?: boolean;
  beforeColor?: string;
  buttonClassName?: string;
  animationTextColor?: string;
}

export interface SolutionItemType {
  text?: string;
  imgSrc: string;
  className?: string;
  id?: number;
}

export interface SolutionProp {
  listSolution: SolutionItemType[];
}
