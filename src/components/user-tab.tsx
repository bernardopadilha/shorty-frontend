import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Button } from "./ui/button"
import { LogInIcon, User2 } from "lucide-react"
import { Separator } from "./ui/separator";

export function UserTab({ name, email }: {name: string; email: string}) {
  return (
    <HoverCard openDelay={0} closeDelay={0.2}>
      <HoverCardTrigger asChild>
        <Button size={'icon'} variant={'cartoon'} className=''>
          <User2 className='size-5' />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-70 bg-black-900 my-3 border" align="end" >
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-lg font-medium text-gray-100 tracking-tight">{name}</h1>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <Button variant={"ghost"} className="w-full font-normal justify-start">
              Meus links
            </Button>
            <Button variant={"ghost"} className="w-full font-normal justify-start relative">
              Sair
              <LogInIcon className="size-5 absolute right-2" />
            </Button>
          </div>
        </div>
      </HoverCardContent>

    </HoverCard>
  )
}