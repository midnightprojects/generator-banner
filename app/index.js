'use strict';
var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');
var mkdirp = require('mkdirp');
var camelCase = require('camelcase');
var _s = require('underscore.string');

    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('skip-welcome-message', {
                desc: 'Skips the welcome message',
                type: Boolean
            });

            this.option('skip-install-message', {
                desc: 'Skips the message after the installation of dependencies',
                type: Boolean
            });
        },

        // ---------------------------------------------------------------------------
        initializing: function () {
            this.pkg = require('../package.json');
        },

        // ---------------------------------------------------------------------------
        askFor: function () {
            var done = this.async();

            if (!this.options['skip-welcome-message']) {
                this.log(yosay('Freakin Banners!!!'));
            }

            var prompts = [
                {
                    type: 'input',
                    name: 'bannerName',
                    message: 'What is the name of the banner? (camelCase):',
                    default: this.appname,
                    filter: function(answer) {
                        return camelCase(answer)
                    }
                }, 
                {
                    type: 'input',
                    name: 'bannerSize',
                    message: 'What size do you need? (300x250):',
                    default: "300x250"
                }
            ];

            this.prompt(prompts, function (props) {
                this.props = props;
                this.bannerSize = this.props.bannerSize;

                console.log("done!!!!!!!!");

                done();
            }.bind(this));
        },

        // ---------------------------------------------------------------------------
        writing: {
            gruntfile: function () {                
                this.fs.copyTpl(
                    this.templatePath('Gruntfile.js'),
                    this.destinationPath('Gruntfile.js'),
                    {
                        pkg: this.pkg
                    }
                );
            },

            packageJSON: function () {
                this.fs.copyTpl(
                    this.templatePath('_package.json'),
                    this.destinationPath('package.json')
                )
            },

            git: function () {
                this.fs.copy(
                    this.templatePath('gitignore'),
                    this.destinationPath('.gitignore')
                );

                this.fs.copy(
                    this.templatePath('gitattributes'),
                    this.destinationPath('.gitattributes')
                );
            },

            bower: function () {
                var bowerJson = {
                    name: _s.slugify(this.appname),
                    private: true,
                    dependencies: {}
                };


                bowerJson.dependencies['gsap'] = '~1.18.0';


                this.fs.writeJSON('bower.json', bowerJson);
                this.fs.copy(
                    this.templatePath('bowerrc'),
                    this.destinationPath('.bowerrc')
                );
            },

            editorConfig: function () {
                this.fs.copy(
                    this.templatePath('editorconfig'),
                    this.destinationPath('.editorconfig')
                );
            },

            run: function() {
                this.composeWith('banner:add', {args: [this.bannerSize]});
            }
        },

        // ---------------------------------------------------------------------------
        install: function () {
            this.installDependencies({
                skipInstall: this.options['skip-install'],
                skipMessage: this.options['skip-install-message']
            });
        },

        // ---------------------------------------------------------------------------
        end: function () {
            var bowerJson = this.fs.readJSON(this.destinationPath('bower.json'));
            
            var howToInstall =
            '\nAfter running ' +
            chalk.yellow.bold('npm install & bower install') +
            ', inject your' +
            '\nfront end dependencies by running ' +
            chalk.yellow.bold('grunt wiredep') +
            '.';

            if (this.options['skip-install']) {
                this.log(howToInstall);
                return;
            }

            // wire Bower packages to .html
            wiredep({
                bowerJson: bowerJson,
                src: this.bannerSize + '/index.html',
                exclude: ['bootstrap.js'],
                ignorePath: /^(\.\.\/)*\.\./
            });

            // wire Bower packages to .scss
            wiredep({
                bowerJson: bowerJson,
                src: this.bannerSize + '/styles/*.scss',
                ignorePath: /^(\.\.\/)+/
            });
        }
    });
