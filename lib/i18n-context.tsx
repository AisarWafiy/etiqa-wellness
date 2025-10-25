"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import en from "@/messages/en.json"
import es from "@/messages/es.json"
import fr from "@/messages/fr.json"

type Messages = typeof en
type Locale = "en" | "es" | "fr"

const messages: Record<Locale, Messages> = {
  en,
  es,
  fr,
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && messages[savedLocale]) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = messages[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
