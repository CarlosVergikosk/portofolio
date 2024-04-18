"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import React from "react";

const toggleItem =
  "text-xs font-light p-0 h-9 w-9 rounded-xl data-[state=on]:bg-primary/15";

interface Props {
  strength: number;
  scale: number;
  onScaleChange: (value: number) => void;
  onStrengthChange: (value: number) => void;
}

export default function EditorControls({
  strength,
  scale,
  onScaleChange,
  onStrengthChange,
}: Props) {
  const [effect, setEffect] = React.useState(false);

  return (
    <div className="relative mt-2 w-full flex flex-row flex-wrap gap-2">
      <ToggleGroup
        type="single"
        className="bg-secondary/30 rounded-xl gap-0 h-9 mx-auto bg-gradient-to-r from-secondary/30 to-secondary/50"
        defaultValue={scale.toString()}
        onValueChange={(value) => {
          onScaleChange(parseInt(value));
        }}
      >
        <ToggleGroupItem value={"1"} className={toggleItem}>
          1x
        </ToggleGroupItem>
        <ToggleGroupItem value={"2"} className={toggleItem}>
          2x
        </ToggleGroupItem>
        <ToggleGroupItem value={"4"} className={toggleItem}>
          4x
        </ToggleGroupItem>
        <ToggleGroupItem value={"8"} className={toggleItem}>
          8x
        </ToggleGroupItem>
      </ToggleGroup>
      <Slider.Root
        className={
          "relative flex min-w-44 flex-1 touch-none select-none items-center h-9"
        }
        defaultValue={[strength]}
        max={100}
        step={1}
        value={[strength]}
        onValueChange={(value: number[]) => {
          onStrengthChange(value[0]);
        }}
      >
        <Slider.Track className="relative h-full w-full grow overflow-hidden rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/50">
          <span className="absolute left-0 z-10 h-full flex items-center text-xs font-light ml-2">
            {"Strength"}
          </span>
          <Slider.Range className="absolute h-full bg-primary/15" />
          <motion.span className="absolute right-0 z-10 h-full flex items-center text-xs font-light mr-2">
            {`${strength}%`}
          </motion.span>
        </Slider.Track>
        <Slider.Thumb className="block bg-background disabled:pointer-events-none disabled:opacity-50" />
      </Slider.Root>
      <Button
        className={cn(
          effect && "animate-shake",
          "ml-auto rounded-xl h-9 w-full sm:w-auto"
        )}
        variant={"default"}
        onClick={() => {
          setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        <Download size={15} className="mr-2" />
        {"Download"}
      </Button>
    </div>
  );
}
