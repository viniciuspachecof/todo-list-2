import { type VariantProps } from 'class-variance-authority';
import { iconVariants } from './IconVariants';

interface IconProps extends React.ComponentProps<'svg'>, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<'svg'>>;
}

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return <SvgComponent className={iconVariants({ animate, className })} {...props} />;
}
