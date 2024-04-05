import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPrimitive,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  Clipboard,
  Clock,
  Copy,
  Ellipsis,
  Trash2,
  UsersRound,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const custom = "rounded-xl text-muted-foreground";

const defaultDate = dayjs().startOf("day");

const start = [
  defaultDate.set("hour", 8).set("minute", 30).set("second", 0),
  defaultDate.set("hour", 8).set("minute", 45).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 0).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 15).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 30).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 45).set("second", 0),
  defaultDate.set("hour", 10).set("minute", 0).set("second", 0),
];

const end = [
  defaultDate.set("hour", 8).set("minute", 45).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 0).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 15).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 30).set("second", 0),
  defaultDate.set("hour", 9).set("minute", 45).set("second", 0),
  defaultDate.set("hour", 10).set("minute", 0).set("second", 0),
  defaultDate.set("hour", 10).set("minute", 15).set("second", 0),
];

interface Props {
  onSelect: (page: string) => void;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03,
    },
  },
};

export default function ActionBaseCreatePane({ onSelect }: Props) {
  const [date, setDate] = React.useState([defaultDate, defaultDate]);
  const [time, setTime] = React.useState([
    start[0].format(),
    end[end.length - 1].format(),
  ]);

  return (
    <motion.div
      layout="position"
      className="box-content flex flex-col items-center justify-start w-96"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <div className="flex flex-col h-16 w-full items-start p-2">
        <Input
          type="text"
          placeholder="New event"
          variant={"ghost"}
          className="p-0 h-auto text-base placeholder:text-muted-foreground placeholder:font-medium"
        />
        <Input
          type="text"
          placeholder="Description"
          variant={"ghost"}
          className="p-0 h-auto text-[13px] placeholder:text-muted-foreground"
        />
      </div>
      <Separator className="my-1" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="px-2 gap-2 w-full justify-start rounded-xl text-muted-foreground font-normal"
          >
            <Video size={20} />
            <span className="text-sm">Add location or call</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom" className="w-96">
          <DropdownMenuGroup className="font-light">
            <DropdownMenuItem>
              <Image
                src="/meet.svg"
                width={14}
                height={14}
                alt="Meet logo"
                className="mr-2"
              />
              Add Meet link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Image
                src="/teams.svg"
                width={14}
                height={14}
                alt="Teams logo"
                className="mr-2"
              />
              Add Teams link
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ArrowRight size={14} className="mr-2" />
            Connect others
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Separator className="my-1" />
      <div className="flex flex-row h-16 w-full items-start p-2 text-muted-foreground font-normal">
        <div className="text-sm flex flex-row gap-2">
          <UsersRound size={18} />
          <Input
            type="email"
            placeholder="Add guests"
            variant={"ghost"}
            className="p-0 h-auto placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <Separator className="my-1" />
      <div className="text-sm flex flex-row h-16 w-full items-start p-2 gap-2 text-muted-foreground">
        <Clock size={18} className="mt-0.5" />
        <div className="flex flex-col gap-1 text-muted-foreground">
          <div className="flex flex-row gap-1 items-center">
            <Select
              defaultValue={time[0]}
              onValueChange={(value) => {
                setTime([value, time[1]]);
              }}
            >
              <SelectTriggerPrimitive>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="py-0.5 -ml-1 px-1 font-normal h-auto tabular-nums text-primary"
                >
                  <SelectValue placeholder="Start" />
                </Button>
              </SelectTriggerPrimitive>
              <SelectContent side="top">
                {start.map((time) => {
                  return (
                    <SelectItem value={time.format()} key={time.format()}>
                      {time.format("HH:mm A")}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <ArrowRight size={13} />
            <Select
              defaultValue={time[1]}
              onValueChange={(value) => {
                setTime([time[0], value]);
              }}
            >
              <SelectTriggerPrimitive>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="py-0.5 -ml-1 px-1 font-normal h-auto tabular-nums text-primary"
                >
                  <SelectValue placeholder="End" />
                </Button>
              </SelectTriggerPrimitive>
              <SelectContent side="top">
                {end
                  .filter((t) => t.isAfter(time[0]))
                  .map((t) => {
                    return (
                      <SelectItem value={t.format()} key={t.format()}>
                        {t.format("HH:mm A")}
                        <span className="ml-1 text-xs text-muted-foreground">{`(${dayjs(
                          time[0]
                        ).from(t, true)})`}</span>
                      </SelectItem>
                    );
                  })}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="py-0.5 -ml-1 px-1 text-[13px] font-normal h-auto"
                >
                  {date[0].format("MMM DD YYYY")}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0"
                align="start"
                sideOffset={5}
              >
                <Calendar
                  mode="single"
                  initialFocus
                  selected={dayjs(date[0]).toDate()}
                  onSelect={(date: Date | undefined) => {
                    setDate((prev) => {
                      return [dayjs(date), prev[1]];
                    });
                  }}
                />
              </PopoverContent>
            </Popover>
            <ArrowRight size={13} />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="py-0.5 px-1 text-[13px] font-normal h-auto"
                >
                  {date[1].format("MMM DD YYYY")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  initialFocus
                  selected={dayjs(date[1]).toDate()}
                  onSelect={(date: Date | undefined) => {
                    setDate((prev) => {
                      return [prev[0], dayjs(date)];
                    });
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <Separator className="my-1" />
      <motion.div
        transition={{ duration: 0.3, type: "spring" }}
        className="flex flex-row justify-between items-center w-full"
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className={custom}
          onClick={() => {
            onSelect("main");
          }}
        >
          <ChevronLeft />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className={custom}>
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="top">
            <DropdownMenuGroup className="font-light">
              <DropdownMenuItem>
                <Copy size={14} className="mr-2" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Clipboard size={14} className="mr-2" />
                Copy
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-light text-red-500 focus:bg-red-500/5 focus:text-red-600">
              <Trash2 size={14} className="mr-2" />
              Delete event
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </motion.div>
  );
}
