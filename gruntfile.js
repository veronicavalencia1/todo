

module.exports = function(grunt){

    //configure main project settings
grunt.initConfig({ 

    //Basic settings and info about our plugins

    pkg: grunt.file.readJSON('package.json'),

    //Name of plugin (plugin name without the "grunt-contrib-")

    cssmin:{
        combine: {
            files:{
                'css/style.css': ['css/main.css']
            }
        }
    },
//uglify
    uglify:{
        dist: {
            files:{
                'localController.min.js': ['localController.js']
            }
        }
    }
});

//Load los plugin
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');

//Do the task 
grunt.registerTask('default', ['cssmin', 'uglify']);
};
