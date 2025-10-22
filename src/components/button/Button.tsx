import { type VariantProps } from 'class-variance-authority';
import Icon from '../icon/Icon';
import { buttonIconVariants, buttonTextVariants, buttonVariants } from './ButtonVariants';
import Text from '../text/Text';

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg'];
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
      {IconComponent && <Icon svg={IconComponent} className={buttonIconVariants({ variant, size })} />}{' '}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
