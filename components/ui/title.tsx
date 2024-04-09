"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const Title = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn("sm:mb-4 mb-3 w-full font-medium leading-loose", className)}
    {...props}
  >
    {children}
  </h1>
);

export { Title };
