# Internationalization (i18n) Guide

This guide explains how internationalization (i18n) is implemented in this Next.js application.

## Overview

This application supports both English (en) and Arabic (ar) languages, with full support for right-to-left (RTL) text direction in Arabic. The implementation uses:

- **next-intl**: For managing translations and locale-based routing
- **cookies-next**: For storing user language preferences
- **Noto Sans Arabic**: For proper Arabic font rendering

## Directory Structure

- `/app/[locale]`: Contains locale-specific pages and layouts
- `/messages/{locale}/common.json`: Translation files for each supported language
- `/components/LanguageSwitcher.tsx`: Component for switching between languages
- `/components/LanguageToggle.tsx`: Simpler component for toggling between languages
- `/lib/i18n-utils.ts`: Utility functions for i18n
- `/fonts/arabic.ts`: Arabic font configuration
- `/middleware.ts`: Handles language detection and routing

## How to Use

### 1. Access Translations in Components

```tsx
'use client';
import { useTranslations } from 'next-intl';

export function MyComponent() {
  // Get translations from the 'common' namespace
  const t = useTranslations();
  
  // Or from a specific namespace
  const tAuth = useTranslations('auth');
  
  return (
    <div>
      <h1>{t('navigation.home')}</h1>
      <p>{tAuth('login.title')}</p>
    </div>
  );
}
```

### 2. Add the Language Switcher to Your Components

```tsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Header() {
  return (
    <header>
      <nav>
        {/* Your navigation items */}
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
```

### 3. Handle RTL Layout

The application automatically handles RTL layout for Arabic content. To ensure proper RTL support in your components:

- Use logical CSS properties where possible (e.g., `margin-inline-start` instead of `margin-left`)
- Check RTL layout during development by switching to Arabic

### 4. Adding New Translations

1. Add new keys to `/messages/en/common.json`
2. Add the same keys with translated content to `/messages/ar/common.json`
3. Use the `i18n-test.ts` utility to verify all keys are present in both languages

Example:
```json
// messages/en/common.json
{
  "myFeature": {
    "title": "New Feature",
    "description": "This is a new feature"
  }
}

// messages/ar/common.json
{
  "myFeature": {
    "title": "ميزة جديدة",
    "description": "هذه ميزة جديدة"
  }
}
```

### 5. Creating New Pages

Create pages under the `/app/[locale]` directory to make them localized.

## Best Practices

1. **Always use translation keys**: Avoid hardcoding text strings
2. **Test both languages**: Verify your UI in both LTR (English) and RTL (Arabic) modes
3. **Keep translations organized**: Use namespaces to organize related translations
4. **Use the language utility functions**: Import helpers from `@/lib/i18n-utils.ts`
5. **Check for missing translations**: Use the testing utility in `@/lib/i18n-test.ts`

## Troubleshooting

### Missing Translations

If a translation is missing, the system will:
1. Log an error to the console
2. Fall back to English for that specific key
3. Continue rendering the application

### Language Detection Issues

If language detection isn't working:
1. Check the NEXT_LOCALE cookie is being set correctly
2. Verify the middleware.ts file is properly configured
3. Ensure the locale parameter is being passed to all links

## Adding Support for New Languages

To add support for additional languages:

1. Add the new locale code to the `locales` array in `/app/[locale]/config.ts`
2. Create a new translation file in `/messages/{new-locale}/common.json`
3. Add appropriate font support if needed
4. Update the LanguageSwitcher component to include the new language
5. Test thoroughly with the new language settings
