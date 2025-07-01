import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, { type ButtonProps } from './button';

describe('test Button component', () => {

    const defaultProps = {
        onClick: jest.fn()
    }

    const testProps: ButtonProps = {
        btnType: 'primary',
        size: 'lg',
        className: 'klass'
    }
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn klass btn-primary btn-lg');
    })
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType='link' href='http://baidu.com'>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLAnchorElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('A');
        expect(element).toHaveClass('btn btn-link');
    })
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button disabled {...defaultProps}>Nice</Button>);
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        expect(element.tagName).toEqual('BUTTON');
        fireEvent.click(element);
        expect(defaultProps.onClick).not.toHaveBeenCalled();
    })
}
)