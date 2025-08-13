
import { LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function ShortnerLink() {
  return (
    <div className="p-0 border rounded-md bg-card w-full max-w-lg">
      <div className="p-4 flex items-center justify-center relative">
        <div className="flex items-center gap-1 absolute top-1/2 -translate-y-1/2 left-4">
          <div className="size-3 bg-primary rounded-full" />
          <div className="size-3 bg-destructive rounded-full" />
          <div className="size-3 bg-yellow rounded-full" />
        </div>

        <h2 className="text-title font-medium">Cole seu link aqui</h2>
      </div>
      <Separator className="bg-gray-400 dark:bg-border" />
      <div className="p-4 flex items-center justify-center gap-2 w-full">
        <Input placeholder="Cole seu link aqui..." className="w-full h-12 placeholder:text-base text-title font-medium text-base!" />
        <Button size={"icon"} variant={"cartoon"} className="size-11">
          <LinkIcon className="size-5" />
        </Button>
      </div>
    </div>
  )
}