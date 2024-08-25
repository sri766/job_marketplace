'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../utils/supabase/server'

import { UserDataValidator } from '../lib/validators/user'
import { z } from 'zod';

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

    try {
        UserDataValidator.parse(data);

        const { error } = await supabase.auth.signInWithPassword(data)

         if (error) {
            redirect('/error')
        }

        revalidatePath('/', 'layout')
        redirect('/')
    }
   catch(error) {
        if (error instanceof z.ZodError) {
            console.log('Validation Error', error.errors)
            redirect('/error')
        }
        else {
            console.error('An unexpected error occurred:', error)
            redirect('/error')
        }
    }
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

    try {
        UserDataValidator.parse(data);

        const { error } = await supabase.auth.signInWithPassword(data)

         if (error) {
            redirect('/error')
        }

        revalidatePath('/', 'layout')
        redirect('/')
    }
    catch(error) {
        if (error instanceof z.ZodError) {
            console.log('Validation Error', error.errors)
            redirect('/error')
        }
        else {
            console.error('An unexpected error occurred:', error)
            redirect('/error')
        }
    }
}