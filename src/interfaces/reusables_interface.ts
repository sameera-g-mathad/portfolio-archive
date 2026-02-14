import * as main from './main_interface';

export interface carouselInterface extends main.childrenProp {
  height: string;
  reverse: boolean;
  slider: 'vertical' | 'horizontal';
  width: string;
}

export interface imageInterface extends main.className {
  src: string;
  alt: string;
}
