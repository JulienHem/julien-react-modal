import './modal.css'
import {useEffect, useState} from "react";
import * as React from "react";


interface IProps {
    title ?: string,
    transitionTime ?: string,
    children ?: any,
    btnContent ?: string,
    isOpen ?: boolean
}

export function Modal({ title, transitionTime = '0', children, btnContent, isOpen}: IProps) {

    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if(isOpen) setIsModalOpen(isOpen)
    }, [isOpen])

    return (
        <>
            {btnContent && <button onClick={() => setIsModalOpen(true)}>{btnContent}</button>}
            <div className='background' style={{
                transition: `opacity` + transitionTime,
            }} data-open={isModalOpen} onClick={() => setIsModalOpen(false)}>
                <div onClick={e => e.stopPropagation()} className={isModalOpen ? 'modal-open modal' : 'modal'}>
                    <div className="modal-close" onClick={() => setIsModalOpen(false)} />
                     <div className={title ? 'modal-head' : 'hidden'}>
                        <div className='modal-title'>{title}</div>
                    </div>

                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
