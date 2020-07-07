# LAYOUTS

This directory contains your Application Layouts.

## script
* In ``layouts/default.vue``, I would use ``Vue.extend({})`` exceptionally, because using ``vue-property-decorator``, ``this.$route``  has any type, which cannot be watched by Vue.
  * This watcher function is required in the page-transition animation.
