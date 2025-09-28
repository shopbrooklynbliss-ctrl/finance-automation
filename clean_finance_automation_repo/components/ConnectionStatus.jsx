'use client'
import React from 'react'
import { useSupabaseAuth } from '../contexts/SupabaseAuthContext'

export default function ConnectionStatus() {
  const { status, user, reconnect } = useSupabaseAuth()
  return (
    <div style={{border:'1px solid #e5e7eb', padding:16, borderRadius:8, background:'#fff'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div style={{fontSize:12, color:'#6b7280'}}>Supabase</div>
          <div style={{fontWeight:600}}>{status}</div>
        </div>
        <div>
          {status !== 'connected' ? (
            <button onClick={reconnect} style={{background:'#2563eb', color:'#fff', padding:'8px 12px', borderRadius:6}}>Reconnect</button>
          ) : (
            <span style={{color:'#0ea5a4'}}>Connected</span>
          )}
        </div>
      </div>
      <div style={{marginTop:8, fontSize:12, color:'#6b7280'}}>{user ? user.email : 'Not logged in'}</div>
    </div>
  )
}
