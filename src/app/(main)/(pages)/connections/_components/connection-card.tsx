import React from 'react'
import { Connection } from '@/lib/types'

type Props = {
  title: Connection['title']
  description: string
}

const ConnectionCard = (props: Props) => {
  const { title, description } = props
  
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default ConnectionCard