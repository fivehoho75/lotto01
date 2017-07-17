import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ActionButton = ({onClick}) => {
    return (
        <div className="ActionButton-wrapper">
            <Button color='grey' onClick={onClick}>
                <Icon name="wizard" fitted/>생성
            </Button>
        </div>
    );
};

export default ActionButton;