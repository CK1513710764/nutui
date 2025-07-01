import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './button';

const meta: Meta<typeof Button> = {
  // title: 在 Storybook 侧边栏中的显示路径。使用斜杠 / 可以创建层级。
  title: 'General/Button',

  // component: 明确关联你的 Button 组件。
  // 这非常重要，它让 Storybook 可以自动：
  // 1. 推断 props 类型并生成 Controls。
  // 2. 在 Docs 标签页中生成组件文档。
  component: Button,

  // parameters: 组件级别的参数配置。
  parameters: {
    // layout: 'centered' 会让你的组件在 "Canvas" 标签页中居中显示，方便观察。
    layout: 'centered',
  },

  // tags: ['autodocs'] 是一个魔法标签，它告诉 Storybook 为这个组件自动生成一个文档页面。
  // 当你点击侧边栏的 "Docs" 链接时，看到的就是这个页面。
  tags: ['autodocs'],

  // argTypes: 用于更精细地配置每个 prop 在 Controls 面板中的交互方式。
  argTypes: {
    btnType: {
      control: 'select', // 使用下拉选择器来控制
      options: ['primary', 'default', 'danger', 'link'],
      description: '设置按钮的类型',
    },
    size: {
      control: 'radio', // 使用单选按钮来控制
      options: ['lg', 'sm'],
      description: '设置按钮的尺寸',
    },
    disabled: {
      control: 'boolean', // 使用开关来控制
      description: '是否禁用按钮',
    },
    children: {
      control: 'text', // 使用文本输入框来控制按钮的文本
      description: '按钮显示的文本内容',
    },
    // 对于 onClick 这样的函数 prop，我们不希望在 Controls 面板中为它生成一个复杂的控件，
    // 而是希望将它连接到 Actions 插件。
    onClick: {
      action: 'clicked', // 'clicked' 是你给这个 action 起的名字，会显示在 Actions 面板中
      description: '点击事件回调'
    },
    // 有些 props 我们不希望在 Controls 表格中显示，比如内部使用的 className。
    className: {
      table: {
        disable: true, // 在表格中禁用(隐藏)这个 prop
      },
    },
  },
  args: {
    size: 'lg',
    disabled: false,
  }
};

// 将这个 meta 对象作为默认导出
export default meta;

// ==================================================================
// 3. Story: 具体的故事 (命名导出)
//    每一个命名导出都代表了组件的一个具体状态或变体。
// ==================================================================

// 定义一个类型别名，方便后面复用，保持代码整洁
type Story = StoryObj<typeof Button>;

// 故事一：主按钮 (Primary Button)
// 这是最基础的写法，直接定义 args。
export const Primary: Story = {
  args: {
    btnType: 'primary',
    children: 'Primary Button',
  },
  // render(args) {
  //   return <div>
  //     <button>aaaa...</button>
  //     <Button {...args}></Button>
  //     <button>aaaa...</button>
  //   </div>
  // }
};

// 故事二：默认按钮 (Default Button)
export const Default: Story = {
  args: {
    btnType: 'default',
    children: 'Default Button',
  },
};

// 故事三：危险按钮 (Danger Button)
export const Danger: Story = {
  args: {
    btnType: 'danger',
    children: 'Danger Button',
  },
};

// 故事四：大号的主按钮 (Large Primary Button)
// 我们可以复用其他故事的 args 来减少重复代码。;

// 故事五：链接按钮 (Link Button)
export const Link: Story = {
  args: {
    btnType: 'link',
    href: 'https://storybook.js.org/', // 不要忘记为 link 按钮提供 href
    children: 'Link to Storybook',
  },
};

// 故事六：禁用的按钮 (Disabled Button)
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};