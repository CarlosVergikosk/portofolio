import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Dot } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  time: string;
  invited: number;
  accepted: number;
  from?: string;
  to?: string;
}

export default function CardItem({
  title,
  time,
  invited,
  accepted,
  from,
  to,
}: Props): JSX.Element {
  const moreThanAnHour = time.includes("hour");
  const tomorrow = time.includes("day");

  const colors = React.useMemo(() => {
    if (moreThanAnHour) {
      return {
        bg: "bg-gray-700/15",
        text: "text-gray-400",
      };
    }

    if (tomorrow) {
      return {
        bg: "bg-blue-700/15",
        text: "text-blue-400",
      };
    }

    return {
      bg: "bg-amber-700/15",
      text: "text-orange-400",
    };
  }, [moreThanAnHour, tomorrow]);

  return (
    <div className="bg-background flex flex-col gap-4 p-3 rounded-2xl shadow-md border border-solid border-muted-foreground/10 h-full">
      <span
        className={cn(
          "rounded-full px-3 py-1.5 text-xs font-medium w-fit",
          colors.bg,
          colors.text
        )}
      >
        {time}
      </span>
      <span className="font-medium">{title}</span>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
          <span>{from}</span>
          <ArrowRight size={15} />
          <span>{to}</span>
        </div>
        <div className="flex flex-row text-sm items-center text-muted-foreground">
          <span>{`${invited} invited`}</span>
          <Dot size={15} />
          <span>{`${accepted} accepted`}</span>
        </div>
      </div>
      <Button className="w-full mt-auto" variant={"secondary"}>
        {"Join Meeting"}
      </Button>
    </div>
  );
}
