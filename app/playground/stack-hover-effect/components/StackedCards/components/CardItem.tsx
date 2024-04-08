import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Dot } from "lucide-react";
import React from "react";

export type CallInfo = {
  title: string;
  time: string;
  invited: number;
  accepted: number;
  from?: string;
  to?: string;
};

interface Props extends CallInfo {
  onJoin?: () => void;
}

export default function CardItem({
  title,
  time,
  invited,
  accepted,
  from,
  to,
  onJoin,
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
    <>
      <span
        className={cn(
          "rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-medium w-fit",
          colors.bg,
          colors.text
        )}
      >
        {time}
      </span>
      <span className="font-medium text-sm sm:text-base">{title}</span>
      <div className="flex flex-col">
        <div className="flex flex-row items-center sm:gap-2 gap-1 text-[10px] sm:text-sm text-muted-foreground">
          <span>{from}</span>
          <ArrowRight className="shrink-0 w-2 sm:w-4" />
          <span>{to}</span>
        </div>
        <div className="flex flex-row text-[10px] sm:text-sm items-center text-muted-foreground">
          <span>{`${invited} invited`}</span>
          <Dot className="shrink-0 w-3 sm:w-5" />
          <span>{`${accepted} accepted`}</span>
        </div>
      </div>
      <Button
        className={"w-full mt-auto"}
        variant={"secondary"}
        onClick={() => {
          onJoin && onJoin();
        }}
      >
        {"Join Meeting"}
      </Button>
    </>
  );
}
