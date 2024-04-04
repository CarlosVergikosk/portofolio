import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="-mx-4 mx auto mb-16 sm:mb-16">
      <a
        href="/"
        className="flex flex-row items-center gap-4 transition-all duration-200 ease-in-out hover:bg-muted/30 rounded-lg p-4"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1714017504111005696/EbGiokeR_400x400.jpg" />
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
