import {h} from "preact";
import Helmet from "preact-helmet";
import CONFIG from '../src/config';

export default () =>
<Helmet
    htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
    title={CONFIG.siteTitle}
    defaultTitle={CONFIG.siteTitle}
    base={{target: "_blank", href: CONFIG.siteUrl}}
    meta={[
        {name: "description", content: CONFIG.siteDescription},
        {name: "keywords", content: CONFIG.siteKeywords},
        {property: "og:type", content: "website"},
        {property: "og:url", content: CONFIG.siteUrl},
        {property: "og:title", content: CONFIG.siteTitle},
        {property: "og:description", content: CONFIG.siteDescription},
        {property: "og:image", content: CONFIG.siteImage},
        {property: "twitter:card", content: "summary_large_image"},
        {property: "twitter:url", content: CONFIG.siteUrl},
        {property: "twitter:title", content: CONFIG.siteTitle},
        {property: "twitter:description", content: CONFIG.siteDescription},
        {property: "twitter:image", content: CONFIG.siteImage}
    ]}
/>