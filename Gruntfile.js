module.exports = function (grunt) {
  // Load the grunt-bump plugin
  grunt.loadNpmTasks("grunt-bump");

  // Configure the bump task
  grunt.initConfig({
    bump: {
      options: {
        files: ["package.json"],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: ["package.json"], // Commit the updated package.json
        createTag: true,
        tagName: "v%VERSION%",
        tagMessage: "Version %VERSION%",
        push: true,
        pushTo: "origin",
      },
    },
  });

  // Default task
  grunt.registerTask("default", ["bump"]);
};
