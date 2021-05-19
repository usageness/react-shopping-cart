import React from 'react';
import ProductListItem from '.';
import PALETTE from '../../../../constants/palette';
import { mockData } from '../../../../mockData';
import AmountInput from '../../../common/AmountInput';
import Button from '../../../common/Button';
import FlexContainer from '../../../common/FlexContainer';
import TrashBin from '../../../common/Icon/TrashBin';

export default {
  title: 'Shared/ProductListItem',
  component: ProductListItem,
  argTypes: {},
};

const Template = (args) => <ProductListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: mockData[0],
};

export const CheckBoxItem = Template.bind({});
CheckBoxItem.args = {
  product: mockData[0],
  isCheckbox: true,
};

export const TableStyle = Template.bind({});
TableStyle.args = {
  product: mockData[0],
  listStyle: 'tableStyle',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  product: mockData[0],
  isCheckbox: true,
  children: (
    <FlexContainer direction="column" justifyContent="space-between" align="flex-end">
      <Button backgroundColor="transparent">
        <TrashBin width="1.5rem" color={PALETTE.GRAY_002} />
      </Button>
      <AmountInput amount={1} setAmount={() => {}} />
      <p>30,000 원</p>
    </FlexContainer>
  ),
};