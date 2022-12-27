import { keyframes } from 'styled-components';

export const menuOpenBefore = keyframes`
from{
   
    transform: rotateZ(0deg);
}
to{
     top: 20px;
    left: 5px;
   transform: rotateZ(-225deg);
}`;

export const menuCloseBefore = keyframes`
from{
   top: 20px;
    left: 5px;
   transform: rotateZ(-225deg);
} 
to{
    top: 25px;
    left: 5px;
    transform: rotateZ(0deg);
}`;
