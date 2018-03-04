module.exports = (grunt, path) => {
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
