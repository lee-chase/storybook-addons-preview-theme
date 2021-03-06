import * as React from 'react';
import { Form } from '@storybook/components';
import { Theme } from '../types';

export interface SelectProps {
  onChange: () => void;
  options: Theme[];
  value?: string;
}

const defaultOption = {
  name: 'empty',
  className: 'none',
  label: 'select...',
};

export function Select({
  onChange,
  options = [],
  value = '',
}): React.FunctionComponentElement<SelectProps> {
  return (
    <Form.Select
      onChange={onChange}
      value={value}
      name="preview-theme"
      label="Preview Theme"
      size="flex"
    >
      {[defaultOption, ...options].map(({ name, label, className }) => (
        <option value={className} key={name}>
          {label}
        </option>
      ))}
    </Form.Select>
  );
}
