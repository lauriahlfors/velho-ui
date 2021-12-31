import { createElement, ReactNode } from 'react';
import './button.scss';

export default function Button({
  children,
  size,
}: {
  children: ReactNode;
  size?: string;
}) {
  // let sizes = [{ name: 'small' }, { name: 'medium' }, { name: 'large' }];
  // let buttonSize: string = 'medium';
  // if (
  //   sizes.find((variant) => {
  //     return variant.name === size;
  //   })
  // ) {
  //   buttonSize = size;
  // }
  return createElement('button', { className: ['button'].join(' ') }, children);
}
