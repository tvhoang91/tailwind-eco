import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cx } from '../../lib/utils';

const buttonVariants = cva(
  'bw-inline-flex bw-items-center bw-justify-center bw-whitespace-nowrap bw-rounded-md bw-text-sm bw-font-medium bw-ring-offset-background bw-transition-colors focus-visible:bw-outline-none focus-visible:bw-ring-2 focus-visible:bw-ring-ring focus-visible:bw-ring-offset-2 disabled:bw-pointer-events-none disabled:bw-opacity-50',
  {
    variants: {
      variant: {
        default: 'bw-hover:bg-primary/90 bw-bg-primary bw-text-primary-foreground',
        destructive: 'bw-bg-destructive bw-text-destructive-foreground hover:bw-bg-destructive/90',
        outline:
          'bw-border bw-border-input bw-bg-background hover:bw-bg-accent hover:bw-text-accent-foreground',
        secondary: 'bw-bg-secondary bw-text-secondary-foreground hover:bw-bg-secondary/80',
        ghost: 'hover:bw-bg-accent hover:bw-text-accent-foreground',
        link: 'bw-text-primary bw-underline-offset-4 hover:bw-underline',
      },
      size: {
        default: 'bw-h-10 bw-px-4 bw-py-2',
        sm: 'bw-h-9 bw-rounded-md bw-px-3',
        lg: 'bw-h-11 bw-rounded-md bw-px-8',
        icon: 'bw-h-10 bw-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
