/* eslint-disable */

import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:3000/`;

test('Check that placeholder test is updated', async t => {
  await t

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#theBestPassword').innerText)
    .notEql('placeholder');
});
