import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//import App from '../../app/containers/App';


//configure({ adapter: new Adapter() });


/*
describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });




  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
  it('should have one heading', () => {
    expect(wrapper.find('#heading').type()).toEqual('h2');
  });

});
*/



describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
