import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        success:
          "bg-success text-white shadow-xs hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        info:
          "bg-info text-info-foreground shadow-xs hover:bg-info/90",
        blue:
          "bg-blue-800 text-white shadow-xs hover:bg-blue-800/90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary text-info underline-offset-4 hover:underline has-[>svg]:hover:inset-ring has-[>svg]:hover:inset-ring-info/50",
        ghost_destructive:
          "hover:bg-destructive/10 hover:text-destructive dark:hover:bg-destructive/20",
        ghost_success:
          "hover:bg-success/10 hover:text-success dark:hover:bg-success/20",
        outline_primary:
          "border border-primary bg-background text-primary shadow-xs hover:bg-primary/10 hover:text-primary/80 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40",
        outline_secondary:
          "border border-secondary bg-background text-secondary shadow-xs hover:bg-secondary/10 hover:text-secondary/80 focus-visible:ring-secondary/20 dark:focus-visible:ring-secondary/40",
        outline_info:
          "border border-info bg-background text-info shadow-xs hover:bg-info/10 hover:text-info/80 focus-visible:ring-info/20 dark:focus-visible:ring-info/40",
        outline_destructive:
          "border border-destructive bg-background text-destructive shadow-xs hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline_success:
          "border border-success bg-background text-success shadow-xs hover:bg-success/10 hover:text-success/80 focus-visible:ring-success/20 dark:focus-visible:ring-success/40",
        none: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-4 rounded-sm px-2 py-1 has-[>svg]:p-1 text-xs",
        sm: "h-7 rounded-md px-3 has-[>svg]:px-1.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        icon_sm: "size-7",
        icon_xs: "size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, type ButtonProps, buttonVariants }