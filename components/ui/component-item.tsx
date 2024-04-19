import * as React from "react";

interface Props {
  title: string;
  description: string;
}

export default function ComponentItem({
  title,
  description,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & Props): JSX.Element {
  return (
    <a
      target="_self"
      className="group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted"
      href={href}
      {...props}
    >
      <span className="flex items-center font-normal">{title}</span>
      <span className="text-muted-foreground">{description}</span>
    </a>
  );
}
