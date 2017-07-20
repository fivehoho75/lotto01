import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ActionButton = ({onMake, onMakeFive}) => {
    return (
        <div className="ActionButton-wrapper">
            <Button color='orange' onClick={onMakeFive}>
                <Icon name="tags" fitted/>5개 생성
            </Button>
            <Button color='orange' onClick={onMake}>
                <Icon name="tag" fitted/>생성
            </Button>
        </div>
    );
};

export default ActionButton;