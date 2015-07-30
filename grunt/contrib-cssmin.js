/**
 * CSS minify
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('cssmin', {
    main: {
      src:  'dist/css/main.css',
      dest: 'dist/css/main.min.css',
    }
  });
};