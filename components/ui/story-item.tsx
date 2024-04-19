import * as React from "react";

interface Props {
  title: string;
  description: string;
}

export default function StoryItem({
  title,
  description,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & Props): JSX.Element {
  return (
    <a
      target="_self"
      className="relative group -mx-4 flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-muted overflow-hidden"
      href={href}
      {...props}
    >
      <span className="flex items-center">{title}</span>
      <span className="text-muted-foreground">{description}</span>
    </a>
  );
}
