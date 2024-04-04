import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  CalendarCheck,
  CalendarDays,
  CalendarFold,
  ChevronLeft,
  Clipboard,
  Clock,
  Copy,
  Ellipsis,
  Rabbit,
  Trash2,
  UsersRound,
  Video,
} from "lucide-react";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
dayjs.extend(relativeTime);

const custom = "rounded-xl text-muted-foreground";

const options = ["All", "Todos", "Events", "Contacts"];

interface Props {
  onSelect: (page: string) => void;
}

export default function ActionBaseSearchPane({ onSelect }: Props) {
  const [selected, setSelected] = React.useState(options[0]);
  const [search, setSearch] = React.useState("");
  const [events, setEvents] = React.useState([
    { title: "Meeting VC x Carlos", time: "02:00 - 03:00", type: "events" },
    {
      title: "Pick up kids from school",
      time: "17:00 - 17:30",
      type: "events",
    },
    {
      title: "Lunch with Thomas",
      time: "7 Apr, 12:00 - 13:30",
      type: "events",
    },
    { title: "Albert J.", time: "Director", type: "contacts" },
  ]);

  const results = React.useMemo(() => {
    return events.filter((e) => {
      const searched = e.title.toLowerCase().includes(search.toLowerCase());

      if (selected === "All") {
        return searched;
      }

      const typed = e.type.toLowerCase() === selected.toLowerCase();

      return typed && searched;
    });
  }, [events, search, selected]);

  return (
    <motion.div
      layout="position"
      className="box-content flex flex-col justify-start w-96"
    >
      <div className="flex flex-row w-full justify-start items-baseline mx-2 box-border">
        <Button
          variant={"ghost"}
          size={"sm"}
          className="bg-muted-foreground/10 px-3 h-7 py-1 text-xs"
          onClick={() => {
            const idx = options.indexOf(selected) + 1;

            const option = options[idx] || options[0];

            setSelected(option);
          }}
        >
          {selected}
        </Button>
        <Input
          variant={"ghost"}
          autoFocus
          className="px-2 placeholder:text-muted-foreground"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${selected.toLowerCase()}`}
        />
      </div>
      <Separator className="my-1" />
      <div className="w-full h-[216px] overflow-auto">
        {results.length === 0 && (
          <div className="flex flex-col gap-1 items-center justify-center h-full text-muted-foreground">
            <Rabbit size={64} strokeWidth={1} />
            {"No results found"}
          </div>
        )}
        {results.map((event, idx) => (
          <Button
            key={idx}
            variant={"ghost"}
            size={"sm"}
            className="flex flex-row justify-start font-normal h-auto items-start w-full py-2 gap-2"
          >
            {event.type === "contacts" ? (
              <Avatar className="h-6 w-6">
                <AvatarImage src="/memoji.png" />
                <AvatarFallback>CV</AvatarFallback>
              </Avatar>
            ) : (
              <div className="h-7 w-7 -ml-0.5 bg-muted-foreground/20 text-muted-foreground rounded-full flex items-center justify-center">
                <CalendarFold size={16} />
              </div>
            )}
            <div className="flex flex-col justify-start font-normal items-start gap-0.5">
              <span>{event.title}</span>
              <span className="text-xs font-light text-muted-foreground">
                {event.time}
              </span>
            </div>
          </Button>
        ))}
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
      </motion.div>
    </motion.div>
  );
}
