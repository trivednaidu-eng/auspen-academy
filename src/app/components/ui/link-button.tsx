import * as React from "react";
import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const linkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "text-white hover:opacity-90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "text-white hover:opacity-90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface LinkButtonProps extends React.ComponentProps<typeof Link>, VariantProps<typeof linkButtonVariants> {}

function LinkButton(
  {
    className,
    variant,
    size,
    to,
    children,
    style,
    ...props
  }: LinkButtonProps,
) {
  // Filter out all Figma inspector props (any prop starting with _fg)
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (!key.startsWith('_fg')) {
      acc[key] = (props as any)[key];
    }
    return acc;
  }, {} as any);

  // Apply brand colors based on variant
  const brandColors = variant === "default" 
    ? { backgroundColor: '#2E66B1', ...style } 
    : variant === "secondary" 
    ? { backgroundColor: '#F7D514', ...style } 
    : variant === "link"
    ? { color: '#2E66B1', ...style }
    : style;

  return (
    <Link
      to={to}
      data-slot="link-button"
      className={cn(linkButtonVariants({ variant, size, className }))}
      style={brandColors}
      {...cleanProps}
    >
      {children}
    </Link>
  );
}

export { LinkButton, linkButtonVariants };
