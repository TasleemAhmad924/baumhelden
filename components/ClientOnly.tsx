"use client"

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    
    
    const cleanup = () => {
      const attributesToRemove = [
        'bis_skin_checked',
        'data-bis',
        'data-bitdefender',
        'data-avast',
        'data-kaspersky',
        'data-norton'
      ]
      
      const elements = document.querySelectorAll('*')
      elements.forEach(element => {
        attributesToRemove.forEach(attr => {
          if (element.hasAttribute(attr)) {
            element.removeAttribute(attr)
          }
        })
      })
    }
    
   
    cleanup()
    
    const observer = new MutationObserver(cleanup)
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: [
        'bis_skin_checked',
        'data-bis',
        'data-bitdefender',
        'data-avast',
        'data-kaspersky',
        'data-norton'
      ]
    })
    
    return () => observer.disconnect()
  }, [])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
