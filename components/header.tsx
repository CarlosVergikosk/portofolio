import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="-mx-4 mx auto mb-16 sm:mb-16">
      <link rel="shortcut icon" href="/cvk.ico" />
      <a
        href="/"
        className="flex flex-row items-center gap-4 hover:bg-muted/30 rounded-lg p-4"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage asChild src="/cvk.svg">
            <Image src="/cvk.svg" alt="logo" width={40} height={40} />
          </AvatarImage>
          <AvatarFallback>CV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="flex items-center font-medium text-primary">
            Carlos Vergikosk
          </span>
          <span className="text-muted-foreground font-normal">
            Frontend Developer / UI Designer
          </span>
        </div>
      </a>
    </header>
  );
}
