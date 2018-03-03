module.exports = (grunt, path) => {
  grunt.loadNpmTasks('grunt-contrib-watch');
  return {
    scripts: {
      files: [
        `${path}/source/**/*`,
        `${path}/Gruntfile.js`
      ],
      tasks: ['build'],
      options: {
        spawn: false,
        interrupt: true
      }
    }
  };
};
