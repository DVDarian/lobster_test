'use strict';

const crypto = require('crypto');
const path = require('path');

module.exports = {
  'Validation of characters limit by steps' : function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .click('div > a')
      .setValue('input[name=title]', crypto.randomBytes(18).toString('hex'))
      .setValue('textarea[name=description]', crypto.randomBytes(101).toString('hex'))
      .setValue('input[name=hours]', 1)
      .setValue('input[name=minutes]', 20)
      .setValue('input[name=image]', path.resolve('../test_files/1.2.png'))
      .setValue('input[name=file]', path.resolve('../test_files/1.pdf'))
      .click('input[name=submit]')
      .assert.cssProperty('#titleCounter', 'color', 'rgba(255, 0, 0, 1)')
      .assert.cssProperty('#descriptionCounter', 'color', 'rgba(255, 0, 0, 1)')
      .assert.value('input[name=file]', 'C:\\fakepath\\1.pdf')
      .assert.value('input[name=image]', 'C:\\fakepath\\1.2.png')
      .pause(1000);
  },
  'Should sent form' : function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .click('div > a')
      .setValue('input[name=title]', crypto.randomBytes(17).toString('hex'))
      .setValue('textarea[name=description]', crypto.randomBytes(100).toString('hex'))
      .setValue('input[name=hours]', 1)
      .setValue('input[name=minutes]', 20)
      .click('input[name=submit]')
      .assert.urlContains('form/success')
      .end();
  }
};