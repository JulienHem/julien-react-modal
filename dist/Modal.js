import './modal.css';
import { useEffect, useState } from "react";
import * as React from "react";
export function Modal({ title, transitionTime = '0', children, btnContent, isOpen }) {
    let [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        if (isOpen)
            setIsModalOpen(isOpen);
    }, [isOpen]);
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') {
                setIsModalOpen(false);
            }
        }
        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, []);
    return (React.createElement(React.Fragment, null,
        btnContent && React.createElement("button", { onClick: () => setIsModalOpen(true) }, btnContent),
        React.createElement("div", { className: 'background', style: {
                transition: `opacity` + transitionTime,
            }, "data-open": isModalOpen, onClick: () => setIsModalOpen(false) },
            React.createElement("div", { onClick: e => e.stopPropagation(), className: isModalOpen ? 'modal-open modal' : 'modal' },
                React.createElement("div", { className: "modal-close", onClick: () => setIsModalOpen(false) }),
                React.createElement("div", { className: title ? 'modal-head' : 'hidden' },
                    React.createElement("div", { className: 'modal-title' }, title)),
                React.createElement("div", { className: "modal-content" }, children)))));
}
