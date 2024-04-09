"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const Reference = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, target, rel, ...props }, ref) => (
  <a
    className={cn(
      "underline decoration-2 transition-all duration-200 ease-in-out font-normal decoration-muted-foreground hover:decoration-primary hover:text-primary",
      className
    )}
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    {children}
  </a>
));

Reference.displayName = "Reference";

export { Reference };
