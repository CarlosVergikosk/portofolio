import EditorControls from "@/app/playground/image-enhancer/components/EditorControls";
import { motionConfig } from "@/app/playground/search-bar/motion/config";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const options = [
  { value: "grainy", label: "Grainy" },
  { value: "blur", label: "Blur" },
  { value: "brightness", label: "Brightness" },
  { value: "contrast", label: "Contrast" },
  { value: "grayscale", label: "Grayscale" },
  { value: "saturate", label: "Saturate" },
  { value: "sepia", label: "Sepia" },
  { value: "hue-rotate", label: "Hue" },
];

function getFilter(type: string, value: number) {
  if (value === 0) return { backdropFilter: "none" };

  switch (type) {
    case "grainy": {
      return {
        background: "url(https://grainy-gradients.vercel.app/noise.svg)",
        opacity: value * 0.01,
      };
    }
    case "blur":
      return { backdropFilter: `blur(${value * 0.1}px)` };
    case "brightness":
      return { backdropFilter: `brightness(${value * 0.1})` };
    case "contrast":
      return { backdropFilter: `contrast(${value * 0.1})` };
    case "grayscale":
      return { backdropFilter: `grayscale(${value}%)` };
    case "saturate":
      return { backdropFilter: `saturate(${value * 0.1})` };
    case "sepia":
      return { backdropFilter: `sepia(${value}%)` };
    case "hue-rotate":
      return { backdropFilter: `hue-rotate(${value}deg)` };
    default:
      return { backdropFilter: "none" };
  }
}

export default function ImageFrame() {
  const [strength, setStrength] = React.useState(50);
  const [scale, setScale] = React.useState(1);
  const [type, setType] = React.useState(options[0].value);

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          WebkitFilter: `${type}(0px)`,
        }}
      >
        <Select
          defaultValue={options[0].value}
          value={type}
          onValueChange={(value) => {
            setType(value);
            setStrength(50);
          }}
        >
          <SelectTrigger className="w-auto absolute top-0 left-0 z-10 m-2 text-xs p-2 h-9 gap-2 !border-none !ring-none !ring-offset-0 !ring-0">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                value={option.value}
                key={option.value}
                className="text-xs h-9"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <motion.div
          transition={motionConfig.transition}
          className="w-full h-full"
          initial={{
            scale: scale * 1.1,
          }}
          animate={{
            scale: scale * 1.1,
          }}
        >
          <Image
            src="/image-enhancer.jpg"
            fill
            alt="Meet logo"
            style={{
              transform: `scale(${scale})`,
            }}
          />
        </motion.div>
        <ResizablePanelGroup
          direction="horizontal"
          className="absolute top-0 left-0"
        >
          <ResizablePanel
            style={{
              ...getFilter(type, strength),
            }}
          />
          <ResizableHandle withHandle />
          <ResizablePanel />
        </ResizablePanelGroup>
      </div>
      <EditorControls
        strength={strength}
        scale={scale}
        onScaleChange={setScale}
        onStrengthChange={setStrength}
      />
    </div>
  );
}
