'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">compodoc-ionic documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad" ></span>Overview\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' : 'data-target="#xs-components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"' : 'id="xs-components-links-module-AppModule-f71d04df473439f45e57cdb49139b344"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' : 'data-target="#xs-components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"' : 'id="xs-components-links-module-HomePageModule-e6348e6dd6ef130312c39c4a9689c56c"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ListPageModule.html" data-type="entity-link">ListPageModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' : 'data-target="#xs-components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"' : 'id="xs-components-links-module-ListPageModule-84510fec6be151253543ad541628ea31"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ListPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPage</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));