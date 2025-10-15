import React from 'react';
// 旧的 import 已被替换为新的 Meta 和 StoryObj 类型
import type { Meta, StoryObj } from '@storybook/react';
//import WelcomeMDX from '../Welcome/Welcome.stories.mdx'
import Button from './button';

// https://github.com/storybookjs/storybook/issues/15574

// 1. Meta 对象定义：使用 Meta 类型，不再需要 as ComponentMeta
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // parameters: {
  //   docs: {
  //     page: WelcomeMDX
  //   }
  // }
};

export default meta;

// 2. Story 类型定义：这是一个推荐的最佳实践
type Story = StoryObj<typeof meta>;

// 3. Template 已被移除，每个 Story 都被定义为一个独立的对象

// 4. 旧的 Template.bind({}) Story 已转换为 Story 对象
export const ADefault: Story = {
  name: '默认按钮样式', // storyName 已变为 name 属性
  args: {
    children: 'Default Button',
  },
};

// 保持原有的注释状态，但使用新的语法
// export const Large: Story = {
//   args: {
//     size: 'lg',
//     children: 'Large Button',
//   },
// };
//
// export const Small: Story = {
//   args: {
//     size: 'sm',
//     children: 'Small Button',
//   },
// };
//
// export const Primary: Story = {
//   args: {
//     btnType: 'primary',
//     children: 'Primary Button',
//   },
// };
//
// export const Danger: Story = {
//   args: {
//     btnType: 'danger',
//     children: 'Danger Button',
//   },
// };
//
// export const Link: Story = {
//   args: {
//     btnType: 'link',
//     children: 'Link Button',
//     href: 'https://google.com'
//   },
// };

// 5. 旧的函数组件 Story 已转换为使用 render 函数的 Story 对象
export const BButtonWithSize: Story = {
  name: '不同尺寸的按钮',
  render: () => (
    <>
      <Button size="lg"> large button </Button>
      <Button size="sm"> small button </Button>
    </>
  ),
};

export const CButtonWithType: Story = {
  name: '不同类型的按钮',
  render: () => (
    <>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://google.com">
        {' '}
        link button{' '}
      </Button>
    </>
  ),
};
