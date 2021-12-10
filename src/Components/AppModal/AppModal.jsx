import React, {PureComponent} from 'react';

import './AppModal.css'

const AppModal = (props) => {

    const closeHandler = (e) => {
        console.log('e', e)
        e.stopPropagation();
        props.closeHandler()
    }

    return (
        <div className='modal'>
            <div className="modal__backdrop" onClick={closeHandler}>
                <div className="modal__container" onClick={event => event.stopPropagation()}>
                    <h3 className='modal__title'>Title</h3>
                    <div className="modal__text">
                        detail text
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppModal;