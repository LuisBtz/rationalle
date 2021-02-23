import { createGlobalStyle } from "styled-components"

import helveticaEot from "../fonts/HelveticaNeueLTPro-Md.eot"
import helveticaSvg from "../fonts/HelveticaNeueLTPro-Md.svg"
import helveticaTtf from "../fonts/HelveticaNeueLTPro-Md.ttf"
import helveticaWoff from "../fonts/HelveticaNeueLTPro-Md.woff"
import helveticaWoff2 from "../fonts/HelveticaNeueLTPro-Md.woff2"

import selfEot from "../fonts/SelfModern-Regular.eot"
import selfSvg from "../fonts/SelfModern-Regular.svg"
import selfTtf from "../fonts/SelfModern-Regular.ttf"
import selfWoff from "../fonts/SelfModern-Regular.woff"
import selfWoff2 from "../fonts/SelfModern-Regular.woff2"

const Typography = createGlobalStyle`
@font-face {
    font-family: 'Self Modern';
    src: url('${selfEot}');
    src: url('${selfEot}?#iefix') format('embedded-opentype'),
        url('${selfWoff2}') format('woff2'),
        url('${selfWoff}') format('woff'),
        url('${selfTtf}') format('truetype'),
        url('${selfSvg}#NimbusSansDOT-BoldExte') format('svg');
        font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica Neue LT Pro';
    src: url('${helveticaEot}');
    src: url('${helveticaEot}?#iefix') format('embedded-opentype'),
        url('${helveticaWoff2}') format('woff2'),
        url('${helveticaWoff}') format('woff'),
        url('${helveticaTtf}') format('truetype'),
        url('${helveticaSvg}#NimbusSansDOT-BoldExte') format('svg');
        font-weight: 500;
    font-style: normal;
    font-display: swap;
}

:root {
    --self: 'Self Modern';
    --helvetica: 'Helvetica Neue LT Pro';
}
body {
	line-height: 1;
    font-family: var(--self);
}

`

export default Typography
