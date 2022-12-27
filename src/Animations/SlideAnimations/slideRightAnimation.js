import { keyframes } from 'styled-components';

export const slideRightAnimation = keyframes`
from{
    opacity: 0;
    transform: translateX(-500%);
}
to{
    transform: translateX(0);
    opacity: 1;
}
`;
