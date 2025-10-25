"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n-context"

export function Header() {
  const { t } = useI18n()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary" />
            <span className="text-xl font-semibold text-foreground">{t("header.brand")}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.nav.services")}
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.nav.about")}
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.nav.testimonials")}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("header.nav.contact")}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              {t("header.signIn")}
            </Button>
            <Button className="hidden sm:inline-flex">{t("header.bookSession")}</Button>
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
