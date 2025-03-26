import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
type Props ={}

const Workflows = async (rops:Props) => {
    const Workflows = await onGetWorkflows()
    return (
        <div className='"relative flex flex-col gap-4'>
            <section className="flex flex-col m-2">
            {Workflows?.length ? (
          Workflows.map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
            </section>
            
        </div>
       
    )
}
export default Workflows