import type React from 'react';
import Text from '../text/Text';
import { cx, type VariantProps } from 'class-variance-authority';
import { badgeSkeletonVariants, badgeTextVariants, badgeVariants } from './BadgeVariants';
import Skeleton from '../skeleton/Skeleton';

interface BadgeProps extends React.ComponentProps<'div'>, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export default function Badge({ variant, size, className, children, loading, ...props }: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(badgeVariants({ variant: 'none' }), badgeSkeletonVariants({ size }), className)}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
