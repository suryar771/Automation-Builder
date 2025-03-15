import React from 'react'

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 relative ml-[80px] p-4">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow dark:bg-gray-800">
        Content goes here...
      </div>
    </div>
  )
}

export default DashboardPage