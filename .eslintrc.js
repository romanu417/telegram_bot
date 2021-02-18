module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "error",
    "vue/static-class-names-order": "error",
    "vue/this-in-template": "error",
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["VueComponent", "pre", "textarea"],
        allowEmptyLines: false
      }
    ],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        alphabetical: false
      }
    ],
    "vue/component-tags-order": [
      "error",
      {
        order: [["script", "template"], "style"]
      }
    ],
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "LIFECYCLE_HOOKS",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/v-on-function-call": ["error", "never"],
    "vue/no-template-target-blank": [
      "error",
      {
        allowReferrer: false,
        enforceDynamicLinks: "always"
      }
    ],
    "vue/html-button-has-type": [
      "error",
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    "vue/no-useless-v-bind": [
      "error",
      {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
      }
    ],
    "vue/v-for-delimiter-style": ["error", "in"],
    "vue/no-confusing-v-for-v-if": "error"
  }
};
