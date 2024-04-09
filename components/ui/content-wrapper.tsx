"use client";

import { cn } from "@/lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

const ContentWrapper = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <main
    className={cn(
      "mx-auto flex w-full px-5 flex-col items-center justify-center leading-relaxed",
      className
    )}
    {...props}
    ref={ref}
  >
    {children}
  </main>
));

ContentWrapper.displayName = "ContentWrapper";

export { ContentWrapper };
