module.exports = function(grunt){
    grunt.initConfig({
        ts: {
            default : {
              tsconfig: './tsconfig.json'
            // Options : {
            //     fast : "never",
            //     rootDir: "./" 
            // },
            // src: [
                
            //     "ts/**/*.ts"
            // ],
            // "dest":"js/player.js"
           
            },
        },
        'connect': {
            server:{
                options: {
                    port: 8080,
                    open : true,
                    // livereload : true,
                    base : './'
                }
            }
        },
            watch: {
                files: ['ts/*.ts'],
                tasks: ['ts']
            }
});

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default",["ts","connect:server","watch"]);
    grunt.registerTask("script",["ts"]);

};