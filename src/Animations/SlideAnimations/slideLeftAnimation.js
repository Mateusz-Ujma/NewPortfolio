import { keyframes } from 'styled-components';
export const slideLeftAnimation = keyframes`
from{
    opacity: 1;
    transform: translateX(0);
}
to{
    transform: translateX(-500%);
    opacity: 0;
}
`;
