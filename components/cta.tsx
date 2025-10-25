"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function CTA() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 lg:p-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                {t("cta.bookConsultation")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t("cta.viewPricing")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
