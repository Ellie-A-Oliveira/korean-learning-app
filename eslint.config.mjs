import angularPlugin from '@angular-eslint/eslint-plugin';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {ignores:['dist/**','node_modules/**']},
  {
    files:['**/*.ts'],
    extends:tseslint.configs.recommended,
    plugins:{'@angular-eslint':angularPlugin},
    processor:angularTemplatePlugin.processors['extract-inline-html'],
    rules:{
      '@angular-eslint/component-selector':['error',{type:'element',prefix:'hp',style:'kebab-case'}],
      '@angular-eslint/contextual-lifecycle':'error',
      '@angular-eslint/directive-selector':['error',{type:'attribute',prefix:'hp',style:'camelCase'}],
      '@angular-eslint/no-empty-lifecycle-method':'error',
      '@angular-eslint/no-input-rename':'error',
      '@angular-eslint/no-inputs-metadata-property':'error',
      '@angular-eslint/no-output-native':'error',
      '@angular-eslint/no-output-on-prefix':'error',
      '@angular-eslint/no-output-rename':'error',
      '@angular-eslint/no-outputs-metadata-property':'error',
      '@angular-eslint/prefer-inject':'error',
      '@angular-eslint/prefer-on-push-component-change-detection':'error',
      '@angular-eslint/prefer-standalone':'error',
      '@angular-eslint/use-pipe-transform-interface':'error'
    }
  },
  {
    files:['**/*.html'],
    languageOptions:{parser:angularTemplateParser},
    plugins:{'@angular-eslint/template':angularTemplatePlugin},
    rules:{
      '@angular-eslint/template/banana-in-box':'error',
      '@angular-eslint/template/eqeqeq':'error',
      '@angular-eslint/template/no-negated-async':'error',
      '@angular-eslint/template/prefer-control-flow':'error'
    }
  }
);
