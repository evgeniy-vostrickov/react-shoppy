import React from 'react';
import { Button } from 'antd';
import { ISButton } from '../../types/ISButton';
import clsx from 'clsx';

const SButton: React.FC<ISButton> = ({textButton, onClick, classButton}) => (
    <Button onClick={onClick} className={clsx('text-white bg-blue-800', classButton)}>{textButton}</Button>
    // <Button onClick={onClick} className={classButton ? className.concat(' ', classButton) : className}>{textButton}</Button>
);

export default SButton;