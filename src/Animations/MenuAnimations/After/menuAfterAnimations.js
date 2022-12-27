import { keyframes } from 'styled-components';

export const menuOpenAfter = keyframes`
from{
    
    transform: rotateZ(0deg);
}
to{
    top: 20px;
    left: 5px;
   transform: rotateZ(225deg);
}`;

export const menuCloseAfter = keyframes`
from{
   top: 20px;
    left: 5px;
   transform: rotateZ(225deg);
} 
to{
    top: 15px;
    left: 5px;
    transform: rotateZ(0deg);
}`;
