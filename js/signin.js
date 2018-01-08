import React from 'react'
import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(() => {
  $('form#signin').on('submit', (e) => {
    e.preventDefault()
    let $form = $(e.target)
    Account.signin($form.serialize())
  })
})
