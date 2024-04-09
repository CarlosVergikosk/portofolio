"use client";

import { cn } from "@/lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

const Title = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <h1
    className={cn("sm:mb-4 mb-3 w-full font-medium leading-loose", className)}
    {...props}
    ref={ref}
  >
    {children}
  </h1>
));

Title.displayName = "Title";

export { Title };
