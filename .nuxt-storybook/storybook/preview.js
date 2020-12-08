import Vue from 'vue'
import { prepareForInline } from './nuxt-entry';
import '~storybook';

;

const globalParameters = {};
globalParameters.docs = {
    ...globalParameters.docs,
    prepareForInline
}
export const parameters = globalParameters
