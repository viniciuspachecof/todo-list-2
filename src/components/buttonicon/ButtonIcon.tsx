import type React from 'react';
import Icon from '../icon/Icon';
import type { VariantProps } from 'class-variance-authority';
import { buttonIconIconVariants, buttonIconVariants } from './ButtonIconVariants';

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'> {
  icon: React.ComponentProps<typeof Icon>['svg'];
}

export default function ButtonIcon({ variant, size, disabled, className, icon, ...props }: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({
        variant,
        size,
        disabled,
        className,
      })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })}></Icon>
    </button>
  );
}
