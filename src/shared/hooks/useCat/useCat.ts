'use client'

import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'

import { API_KEY, API_URL } from '@/shared/utils/constants'

export function useCat() {
  const [catImage, setCatImage] = useState<{ id: string; url: string } | null>(
    null,
  )
  const [isEnabled, setIsEnabled] = useState(true)
  const [isAutoRefresh, setIsAutoRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const fetchCatImage = useCallback(async () => {
    if (!isEnabled) return

    setIsLoading(true)
    try {
      const { data } = await axios.get(API_URL, {
        headers: {
          'x-api-key': API_KEY,
        },
      })
      setCatImage(data[0])
    } finally {
      setIsLoading(false)
    }
  }, [isEnabled])

  useEffect(() => {
    fetchCatImage()
  }, [fetchCatImage])

  useEffect(() => {
    if (isAutoRefresh && isEnabled) {
      timer.current = setInterval(fetchCatImage, 5000)
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [isAutoRefresh, isEnabled, fetchCatImage])

  return {
    fetchCatImage,
    catImage,
    isLoading,
    isEnabled,
    toggleIsEnabled: () => setIsEnabled(e => !e),
    isAutoRefresh,
    toggleIsAutoRefresh: () => setIsAutoRefresh(a => !a),
  }
}
