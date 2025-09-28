// HydrationBoundary.tsx nur bei Browser Erweiterungen wichtig


"use client"

import { useEffect, useState } from 'react'

interface HydrationBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function HydrationBoundary({ children, fallback = null }: HydrationBoundaryProps) {
  const [isHydrated, setIsHydrated] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('hydration') || event.message.includes('Hydration')) {
        console.warn('Hydration error detected, this is likely caused by browser extensions:', event.message)
        setHasError(true)
        event.preventDefault()
        return false
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && typeof event.reason === 'string' && event.reason.includes('hydration')) {
        console.warn('Hydration promise rejection detected:', event.reason)
        setHasError(true)
        event.preventDefault()
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // Mark as hydrated after a short delay to ensure DOM is stable
    const timer = setTimeout(() => {
      setIsHydrated(true)
    }, 100)

    
    const cleanupAttributes = () => {
      const attributesToRemove = [
        'bis_skin_checked',
        'data-bis',
        'data-bitdefender',
        'data-avast',
        'data-kaspersky',
        'data-norton'
      ]
      
      document.querySelectorAll('*').forEach(element => {
        attributesToRemove.forEach(attr => {
          if (element.hasAttribute(attr)) {
            element.removeAttribute(attr)
          }
        })
      })
    }

    cleanupAttributes()

    
    const observer = new MutationObserver(cleanupAttributes)
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

    return () => {
      clearTimeout(timer)
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      observer.disconnect()
    }
  }, [])

  if (hasError || !isHydrated) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
