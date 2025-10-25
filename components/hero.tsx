"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {t("hero.title")}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{t("hero.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {t("hero.startJourney")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                {t("hero.explorePrograms")}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">5,000+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.clients")}</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.satisfaction")}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
              <img
                src="/peaceful-meditation-yoga-wellness-nature.jpg"
                alt="Wellness and meditation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold text-card-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">{t("hero.coach")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
