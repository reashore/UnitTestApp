
import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import { expect } from 'chai';
import App from './App';
import fs from 'fs';

describe('Math test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it("Next test", (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Unit Test App');
      done();
      window.close();
    })
  })
});
