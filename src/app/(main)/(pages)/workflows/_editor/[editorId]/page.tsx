import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='h-full'>
        <EditorProvider>
            <Editor />
        </EditorProvider>
                </div>
  )
}

export default Page