import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules'


Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
    ...required,
    message: 'This field is required'
})

extend('min', {
    validate(value, args) {
        return value.length >= args.length;
    },
    params: ['length'],
    message: 'The {_field_} field must have at least {min} characters'
})