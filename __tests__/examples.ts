const sync = require('@wdio/sync').default;
import nodeFetch from 'node-fetch';

describe('trying to friend them', () => {
  beforeEach(() => {
    browser.url('https://www.reasonsecurity.com/');
  });



  test('a mocked api response', async () => {
    const expectedRes = {
      dummy: [
        {
          data: 'example'
        }
      ]
    };

    await browser.call(async () => {
      await nodeFetch('http://localhost:8080/dummy_data')
        .then((res: any) => res.json())
        .then((body: any) => expect(body).toEqual(expectedRes))
    });
  });

  test('test', async () => {
    await expect(browser).toHaveTitle('Jest', { containing: true });
  });

  test('test2', async () => {
    await expect(browser).toHaveTitle('Reason security antivirus: free antivirus protection for your computer', { containing: true });
  });

  test('get link text', async () => {
    const forHomeBtn = await browser.$(`[data-asset_name="forHome]"`);
    const list = await browser.$('._3ziZ6');
    const premium = await browser.$('._1Ej39');
    await expect(browser).toHaveTitle('Reason security antivirus: free antivirus protection for your computer', { containing: true });
    await forHomeBtn.click();
    await list.waitForExist();
    await expect(premium).toHaveText('Reason Premium', { containing: true });
  });

})
