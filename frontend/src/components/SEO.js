import { useEffect } from 'react';

export const SEO = ({ title, description, raw }) => {
  const siteName = 'Paroisse Notre Dame d\'Autan';
  const fullTitle = raw ? title : (title ? title + ' | ' + siteName : siteName);
  const metaDescription = description || 'Paroisse Notre Dame d\'Autan - Communaut\u00e9 paroissiale vivante et accueillante au service de la foi et de la fraternit\u00e9. Castanet-Tolosan, Saint-Orens et environs.';

  useEffect(() => {
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metaDescription);

    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', 'fr_FR');
  }, [fullTitle, metaDescription]);

  return null;
};
