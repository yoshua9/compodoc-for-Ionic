'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">compodoc-ionic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/seccion-1.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-cba660ba9ae1fc2199fdba8b0885c2fe"' : 'data-target="#xs-additional-page-cba660ba9ae1fc2199fdba8b0885c2fe"' }>
                                                <span class="link-name">Seccion 1</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-cba660ba9ae1fc2199fdba8b0885c2fe"' : 'id="xs-additional-page-cba660ba9ae1fc2199fdba8b0885c2fe"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-1/seccion-1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 1.1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-1/seccion-1.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 1.2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-1/seccion-1.3.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 1.3</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-1/seccion-1.4.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 1.4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/seccion-2.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-6802c7ec6e71707f4d1fc01f403e4b57"' : 'data-target="#xs-additional-page-6802c7ec6e71707f4d1fc01f403e4b57"' }>
                                                <span class="link-name">Seccion 2</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-6802c7ec6e71707f4d1fc01f403e4b57"' : 'id="xs-additional-page-6802c7ec6e71707f4d1fc01f403e4b57"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-2/seccion-2.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 2.1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/seccion-2/seccion-2.1/seccion-2.1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 2.1.1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/seccion-2/seccion-2.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Seccion 2.2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/seccion-3.html" data-type="entity-link" data-context-id="additional">Seccion 3</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' : 'data-target="#xs-components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' :
                                            'id="xs-components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' : 'data-target="#xs-components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' :
                                            'id="xs-components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' : 'data-target="#xs-components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' :
                                            'id="xs-components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});