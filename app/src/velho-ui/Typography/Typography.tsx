import { createElement, ReactNode } from 'react';
import './typography.scss';

export default function Typography({
  children,
  variant,
  weight,
  color,
  spaceBottom,
}: {
  children: ReactNode;
  variant?: string;
  weight?: number;
  color?: string;
  spaceBottom?: string;
}) {
  let variants = [
    { name: 'h1', element: 'h1', class: 'heading-1' },
    { name: 'h2', element: 'h2', class: 'heading-2' },
    { name: 'h3', element: 'h3', class: 'heading-3' },
    { name: 'h4', element: 'h4', class: 'heading-4' },
    { name: 'p1', element: 'p', class: 'body-1' },
    { name: 'p2', element: 'p', class: 'body-2' },
  ];
  let variantName = '';
  let variantClass = '';

  if (
    variants.find((typography) => {
      // console.log(typography);

      variantName = typography.element;
      variantClass = typography.class;

      return typography.name === variant;
    })
  ) {
    // return typography element based on variant input
    return createElement(
      variantName,
      {
        style: { fontWeight: weight, marginBottom: spaceBottom },
        className: ['typography', variantClass].join(' '),
      },
      children
    );
  } else {
    return <p>No typography element was found by that variant</p>;
  }
  return null;
}

// let variantClass: string[] = [''];
// variantClass.push(typography.variant === variant ? typography.class : '');
