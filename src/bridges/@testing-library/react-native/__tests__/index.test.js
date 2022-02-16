import React from 'react';

import { Button } from 'react-native';

import { fireEvent, render } from '../';

const DEFAULTS = {
  // onPress: {onPressLearnMore},
  title: 'Learn More',
  color: '#841584',
  accessibilityLabel: 'Learn more about this purple button',
};

describe('bridge:@testing-library/react-native', () => {
  test('renders', () => {
    const { toJSON } = render(<Button {...DEFAULTS} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('prop:onPress', async () => {
    const handlePress = jest.fn();
    const { getByRole } = render(<Button {...DEFAULTS} onPress={handlePress} />);

    fireEvent.press(getByRole('button'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  test('accessibilityLabel', () => {
    const { toJSON, getByLabelText } = render(<Button {...DEFAULTS} accessibilityLabel="soyjavi" />);
    expect(getByLabelText('soyjavi')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  test('testID', () => {
    const { toJSON, getByTestId } = render(<Button {...DEFAULTS} testID="soyjavi" />);
    expect(getByTestId('soyjavi')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });
});
