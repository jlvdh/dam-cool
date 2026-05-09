import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type LanguageSwitcherProps = {
  locale: Locale;
  nlHref: string;
  enHref: string;
};

export function LanguageSwitcher({ locale, nlHref, enHref }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex gap-2" aria-label="Language switcher">
      <Link
        href={nlHref}
        className={`rounded-chip px-2.5 py-1 text-xs ${
          locale === "nl"
            ? "font-semibold text-dam-ink underline underline-offset-4"
            : "text-dam-muted"
        }`}
      >
        NL
      </Link>
      <Link
        href={enHref}
        className={`rounded-chip px-2.5 py-1 text-xs ${
          locale === "en"
            ? "font-semibold text-dam-ink underline underline-offset-4"
            : "text-dam-muted"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
