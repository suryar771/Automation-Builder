import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

type Props = {
    name: string
    description: string
    id: string
    publish: boolean | null
  }


  const Workflow = ({ description, id, name, publish }: Props) => {
    
  //wip
    return (
        <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
      <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div className="">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-3 p-4">
        <Label
        htmlFor='airplane-mode'
        className="text-muted-foreground"
        >
            On
        </Label>
<Switch
id='airplane-mode'
// onClick={onPublishFlow}
// defaultChecked={props.publish!}
/>
      </div>
      </Card>

  )
}

export default Workflow