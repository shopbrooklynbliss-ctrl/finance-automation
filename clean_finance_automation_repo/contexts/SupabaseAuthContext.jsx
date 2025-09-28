'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const SupabaseAuthContext = createContext()

export function useSupabaseAuth() {
  return useContext(SupabaseAuthContext)
}

export function SupabaseAuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let mounted = true
    async function init() {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('getSession error', error)
        setStatus('disconnected')
        return
      }
      if (data?.session) {
        setSession(data.session)
        setUser(data.session.user)
        setStatus('connected')
      } else {
        setStatus('disconnected')
      }
    }
    init()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      if (session) {
        setSession(session)
        setUser(session.user)
        setStatus('connected')
      } else {
        setSession(null)
        setUser(null)
        setStatus('disconnected')
      }
    })
    return () => {
      mounted = false
      if (listener?.subscription) listener.subscription.unsubscribe()
    }
  }, [])

  const reconnect = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: '/' } })
  }

  return (
    <SupabaseAuthContext.Provider value={{ session, user, status, reconnect }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}
