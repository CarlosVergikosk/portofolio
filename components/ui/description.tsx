"use client";

import { cn } from "@/lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

const Description = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <p
    className={cn("leading-[1.5] w-full text-muted-foreground", className)}
    {...props}
    ref={ref}
  >
    {children}
  </p>
));

Description.displayName = "Description";

export { Description };
