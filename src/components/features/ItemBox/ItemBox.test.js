import React from 'react';
import { shallow } from 'enzyme';
import { ItemBoxComponent } from './ItemBox';

describe('Component ItemBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ItemBoxComponent />);
    expect(component).toBeTruthy();
  });
});
