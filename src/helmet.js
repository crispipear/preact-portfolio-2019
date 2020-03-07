import {h} from "preact";
import Helmet from "preact-helmet";
import CONFIG from '../src/config';

<Helmet
    htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
    title={CONFIG.siteTitle}
    defaultTitle={CONFIG.siteTitle}
    base={{target: "_blank", href: CONFIG.siteUrl}}
    meta={[
        {name: "description", content: CONFIG.siteDescription},
        {name: "keywords", content: CONFIG.siteKeywords},
        // {property: "og:type", content: "article"}
    ]}
/>