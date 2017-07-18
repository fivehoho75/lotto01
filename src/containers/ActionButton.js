import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ActionButton = ({onMake}) => {
    return (
        <div className="ActionButton-wrapper">
            <Button color='orange' onClick={onMake}>
                <Icon name="wizard" fitted/>생성
            </Button>
        </div>
    );
};

export default ActionButton;