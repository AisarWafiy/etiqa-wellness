"use client"

import { Heart, Sparkles, Users, Leaf } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Features() {
  const { t } = useI18n()

  const features = [
    {
      icon: Heart,
      title: t("features.items.holistic.title"),
      description: t("features.items.holistic.description"),
    },
    {
      icon: Sparkles,
      title: t("features.items.personalized.title"),
      description: t("features.items.personalized.description"),
    },
    {
      icon: Users,
      title: t("features.items.expert.title"),
      description: t("features.items.expert.description"),
    },
    {
      icon: Leaf,
      title: t("features.items.natural.title"),
      description: t("features.items.natural.description"),
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("features.description")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
