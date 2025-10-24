import type React from 'react';
import Icon from '../icon/Icon';
import type { VariantProps } from 'class-variance-authority';
import { buttonIconIconVariants, buttonIconVariants } from './ButtonIconVariants';
import Skeleton from '../skeleton/Skeleton';

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'> {
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
}

export default function ButtonIcon({ variant, size, disabled, className, icon, loading, ...props }: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({
          variant: 'none',
          size,
          className,
        })}
      />
    );
  }

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
