'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var wiredep = require('wiredep');
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
        this.bannerSize = this.name; 
    },

    // ---------------------------------------------------------------------------
    writing: {
        misc: function () {
            mkdirp("app/" + this.bannerSize);
            mkdirp("app/" + this.bannerSize + '/images');
            mkdirp("app/" + this.bannerSize + '/fonts');
        },

        scripts: function () {
            this.fs.copy(
                this.templatePath('main.js'),
                this.destinationPath("app/" + this.bannerSize + '/scripts/main.js')
            );

            this.fs.copy(
                this.templatePath('Banner.js'),
                this.destinationPath("app/" + this.bannerSize + '/scripts/Banner.js')
            );
        },

        styles: function () {
            var stylesheet = 'main.scss';

            this.fs.copyTpl(
                this.templatePath(stylesheet),
                this.destinationPath("app/" + this.bannerSize + '/styles/' + stylesheet), 
                {
                    bannerWidth: this.bannerSize.split("x")[0] + "px", 
                    bannerHeight: this.bannerSize.split("x")[1] + "px"
                }
            )
        },            

        html: function () {
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath("app/" + this.bannerSize + '/index.html'),
                {
                    appname: this.appname, 
                    bannerType: this.bannerType
                }
            );
        }
    }
});