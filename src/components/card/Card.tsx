import type { VariantProps } from 'class-variance-authority';
import { cardVariants } from './CardVariants';
import React from 'react';

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({ as = 'div', size, children, className, ...props }: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
