function main() {
    logseq.provideStyle(String.raw`
    /*  Testing TANA Features */
.flex-1 :is(.journal .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row .block-body, .is-journals > .relative .blocks-container > div > div > .ls-block > .flex.flex-row .block-body) {
    font-size: 85%;
    color: var(--ls-primary-text-color) !important;
    opacity: 0.7;
    font-weight: 400;
}
.flex-1 :is(.journal > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block, .is-journals > .relative .blocks-container > div > div > .ls-block) {
    display: flex;
    border-bottom: 1px solid var(--ls-guideline-color);
}
/* hide any icons */
.flex-1 :is(.journal > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block .page-ref .link-icon, .is-journals > .relative .blocks-container > div > div > .ls-block .page-ref .link-icon) {
    display: none !important;
}
/* hide brackets */
.flex-1 :is(.journal > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row .page-reference .bracket, .is-journals > .relative .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row .page-reference .bracket) {
    display: none;
}
.flex-1 :is(.journal > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block:first-child, .is-journals > .relative .blocks-container > div > div > .ls-block:first-child) {
    border-top: 1px solid var(--ls-guideline-color);
}
.flex-1 :is(.journal > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row, .is-journals > .relative .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row) {
    min-width: 155px;
    max-width: 155px;
    font-weight: 500 !important;
    color: var(--ls-primary-text-color) !important;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col .blocks-container > div > div > .ls-block > :is(.flex.flex-row) .editor-wrapper > .editor-inner textarea, .is-journals > .relative .blocks-container > div > div > .ls-block > :is(.flex.flex-row) .editor-wrapper > .editor-inner textarea) {
    max-width: 156px;
    border-right: 1px solid var(--ls-guideline-color);
}
:is(.ls-wide-mode) .flex-1 :is(.journal:not(.color-level) > .flex.flex-col .blocks-container > div > div > .ls-block > :is(.block-children-container) .editor-wrapper > .editor-inner textarea, .is-journals > .relative .blocks-container > div > div > .ls-block > :is(.block-children-container) .editor-wrapper > .editor-inner textarea) {
    width: 500px;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col .blocks-container > div > div > .ls-block > :is(.block-children-container) .editor-wrapper > .editor-inner textarea, .is-journals > .relative .blocks-container > div > div > .ls-block > :is(.block-children-container) .editor-wrapper > .editor-inner textarea) {
    width: 500px;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block .flex-1.w-full, .is-journals > .relative .blocks-container > div > div > .ls-block .flex-1.w-full) {
    min-width: 100px;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block .absolute-modal, .is-journals > .relative .blocks-container > div > div > .ls-block .absolute-modal) {
    max-inline-size: fit-content !important;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper, .is-journals > .relative .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper) {
    border-right: 0px solid var(--ls-guideline-color);
}

.flex-1 .journal:not(.color-level) > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row span.inline:first-child:before {
    content: "\ee8f";
    font-family: 'tabler-icons';
    padding-right: 5px;
    font-weight: 300 !important;
}
.flex-1 .is-journals > .relative .blocks-container > div > div > .ls-block > .flex.flex-row > .flex.flex-col.block-content-wrapper > .flex.flex-row span.inline:first-child:before {
    content: "\ee8f";
    font-family: 'tabler-icons';
    padding-right: 5px;
    font-weight: 300 !important;
}
.flex-1 :is(.journal:not(.color-level) > .flex.flex-col > .initial > div:not(.references-blocks) .blocks-container > div > div > .ls-block > .block-children-container > .block-children, .is-journals > .relative .blocks-container > div > div > .ls-block > .block-children-container > .block-children) {
    border-left: 0px solid;
}
    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
