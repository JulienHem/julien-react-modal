/// <reference types="react" />
import './modal.css';
interface IProps {
    title?: string;
    transitionTime?: string;
    children?: any;
    btnContent?: string;
    isOpen?: boolean;
}
export declare function Modal({ title, transitionTime, children, btnContent, isOpen }: IProps): JSX.Element;
export {};
