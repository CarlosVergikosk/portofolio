"use client";

import CallWidget from "@/app/playground/stack-hover-effect/components/CallWidget";
import StackedCards from "@/app/playground/stack-hover-effect/components/StackedCards";
import { CallInfo } from "@/app/playground/stack-hover-effect/components/StackedCards/components/CardItem";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

dayjs.extend(relativeTime);

interface Props {
  onViewChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function CardViewSwitcher({ onViewChange }: Props): JSX.Element {
  const [call, setCall] = React.useState<CallInfo | null>(null);

  if (call) {
    return (
      <CallWidget
        data={call}
        onDisconnect={() => {
          setCall(null);
          onViewChange(0);
        }}
      />
    );
  }

  return (
    <StackedCards
      onJoin={(data: CallInfo) => {
        setCall(data);
        onViewChange(1);
      }}
    />
  );
}
