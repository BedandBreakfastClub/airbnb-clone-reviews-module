import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../client/src/components/App';
import Header from '../client/src/components/Header';
import Reviews from '../client/src/components/Reviews';

// global.document = jsdom('<html><head></head><body><div id="app" /></body></html>');

// mount(<App />, { attachTo: document.getElementById('app') });

describe('App Component Unit Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders the Reviews component', () => {
    expect(wrapper.find(Reviews).length).toBe(1);
  });
});
