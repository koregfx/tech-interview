'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Nombre tiene que tener al menos 2 caracteres',
    }),
    email: z.string().email('El email tiene que ser un email valido'),
    password: z
      .string()
      .min(8, { message: 'Contraseña tiene que tener al menos 8 caracteres' })
      .regex(/[A-Z]/, 'La contraseña tiene que contener al menos una mayuscula')
      .regex(/[a-z]/, 'La contraseña tiene que contener al menos una minuscula')
      .regex(/[0-9]/, 'La contraseña tiene que contener al menos un numero'),
    confirmPassword: z.string(),
    country: z.string().min(1, 'Selecciona un pais'),
    terms: z
      .boolean()
      .refine((data) => data === true, { message: 'Acepta los terminos' }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

type RegisterFormType = z.infer<typeof formSchema>

export function RegisterForm() {
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    axios
      .get('/api/countries')
      .then((resp) => {
        setCountries(resp.data)
      })
      .catch((error) => console.error('Error getting countries: ', error))
  }, [])

  // 1. Define your form.
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
      country: '',
    },
  })

  const { handleSubmit, reset } = form
  // 2. Define a submit handler.
  function onSubmit(values: RegisterFormType) {
    console.log(values)
    axios
      .post('/api/register', values)
      .then((e) => {
        console.log(e.status)
        reset()
      })
      .catch((err) => console.log('Error in register Post: ', err))
  }
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Adrian" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="adrian@gmail.com" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="Contraseña" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma Contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirma tu Contraseña"
                  type="password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pais</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu pais" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={`country_${country}`} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Acepto los Terminos y condiciones de la plataforma
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
