import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';



test('should setup LoginPage component correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should setup LoginPage component correctly', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(startLogin).toHaveBeenCalled();
});


