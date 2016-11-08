var browserify_transform_options = [['babelify', {
    "presets": [
        "es2015", "react"
    ],
    "plugins": ["transform-object-rest-spread"]
}]];
module.exports = function (grunt) {
    var browserify_src_files = {
        './examples/src/build/main.js': './examples/src/main.js'
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        browserify: {
            dev: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    configure: function (bundle) {
                        bundle.exclude('react/lib/ReactContext');
                    },
                    watch: true,
                    transform: browserify_transform_options
                },
                files: browserify_src_files
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', [
        'browserify:dev'
    ]);

};
