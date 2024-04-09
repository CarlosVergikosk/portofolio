"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const Description = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("leading-[1.5] w-full text-muted-foreground", className)}
    {...props}
  >
    {children}
  </p>
);

export { Description };
