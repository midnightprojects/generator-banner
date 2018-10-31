'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
//var wiredep = require('wiredep');
var mkdirp = require('mkdirp');
var camelCase = require('camelcase');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'The subgenerator name'
        });

        this.bannerType = this.config.get('bannerType');
        this.includeZepto = this.config.get('includeZepto');
        this.bannerSize = this.name;
    },

    // ---------------------------------------------------------------------------
    writing: {
        misc: function () {
            mkdirp("app/" + this.bannerSize);
            mkdirp("app/" + this.bannerSize + '/images');
            mkdirp("app/" + this.bannerSize + '/fonts');
            mkdirp("app/" + this.bannerSize + '/media');
        },

        scripts: function () {
            this.fs.copy(
                this.templatePath('main.js'),
                this.destinationPath("app/" + this.bannerSize + '/scripts/main.js')
            );

            if (this.bannerType === "DoubleClick") {
                this.fs.copy(
                    this.templatePath('TrackingDoubleClick.js'),
                    this.destinationPath("app/" + this.bannerSize + '/scripts/TrackingDoubleClick.js')
                );
            }

            if (this.bannerType === "Sizmek") {
                this.fs.copy(
                    this.templatePath('TrackingSizmek.js'),
                    this.destinationPath("app/" + this.bannerSize + '/scripts/TrackingSizmek.js')
                );
            }

            if (this.bannerType === "Flashtalking") {
                this.fs.copy(
                    this.templatePath('TrackingFlashtalking.js'),
                    this.destinationPath("app/" + this.bannerSize + '/scripts/TrackingFlashtalking.js')
                );

                this.fs.copyTpl(
                    this.templatePath('manifest.js'),
                    this.destinationPath("app/" + this.bannerSize + '/manifest.js'),
                    {
                        bannerWidth: parseInt(this.bannerSize.split("x")[0]),
                        bannerHeight: parseInt(this.bannerSize.split("x")[1])
                    }
                );
            }

            if (this.bannerType === "DCM") {
                this.fs.copy(
                    this.templatePath('TrackingDCM.js'),
                    this.destinationPath("app/" + this.bannerSize + '/scripts/TrackingDCM.js')
                );
            }

            if (this.bannerType === "None") {
                this.fs.copy(
                    this.templatePath('TrackingNone.js'),
                    this.destinationPath("app/" + this.bannerSize + '/scripts/TrackingNone.js')
                );
            }

            this.fs.copy(
                this.templatePath('Animation.js'),
                this.destinationPath("app/" + this.bannerSize + '/scripts/Animation.js')
            );

            this.fs.copy(
                this.templatePath('gsap_extras'),
                this.destinationPath("app/" + this.bannerSize + '/scripts/gsap_extras')
            );
        },

        styles: function () {
            var mainStyleSheet = 'main.scss';

            this.fs.copyTpl(
                this.templatePath(mainStyleSheet),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + mainStyleSheet),
                {
                    bannerWidth: this.bannerSize.split("x")[0] + "px",
                    bannerHeight: this.bannerSize.split("x")[1] + "px"
                }
            )

            var fontStyleSheet = '_fonts.scss';

            this.fs.copyTpl(
                this.templatePath(fontStyleSheet),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + fontStyleSheet),
                {
                    bannerWidth: this.bannerSize.split("x")[0] + "px",
                    bannerHeight: this.bannerSize.split("x")[1] + "px"
                }
            )

            var mixinStyleSheet = '_mixins.scss';

            this.fs.copyTpl(
                this.templatePath(mixinStyleSheet),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + mixinStyleSheet),
                {
                    bannerWidth: this.bannerSize.split("x")[0] + "px",
                    bannerHeight: this.bannerSize.split("x")[1] + "px"
                }
            )

            var layoutStyleSheet = '_layout.scss';

            this.fs.copyTpl(
                this.templatePath(layoutStyleSheet),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + layoutStyleSheet),
                {
                    bannerWidth: this.bannerSize.split("x")[0] + "px",
                    bannerHeight: this.bannerSize.split("x")[1] + "px"
                }
            )

            this.fs.copyTpl(
                this.templatePath('_sprites.scss'),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + '_sprites.scss'),
                {}
            )
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath("app/" + this.bannerSize + '/index.html'),
                {
                    appname: this.appname,
                    bannerType: this.bannerType,
                    includeZepto: this.includeZepto,
                    dimensions: "width=" + this.bannerSize.split("x")[0] + ",height=" + this.bannerSize.split("x")[1]
                }
            );
        }
    }
});
