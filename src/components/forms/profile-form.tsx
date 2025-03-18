'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { userAgent } from 'next/server'

type Props = {
  user: any
onUpdate?: any
}

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

  const handleSubmit = async (values: z.infer<typeof EditUserProfileSchema>) => {
    setIsLoading(true)
    await onUpdate(values)
    setIsLoading(false)
  }
  useEffect(() => {
    form.reset({
      name: user.name,
      email: user.email,
    })
  }, [user])

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit((data) => {
          console.log(data)
          // Add your submission logic here
        })}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Missing email field - adding it below */}
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add a submit button */}
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm