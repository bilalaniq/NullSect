

// emotion
import { keyframes } from '@emotion/react';

const textFadeIn = keyframes`
  0% { color: grey; }
  100% { color: white; }
`;

const backgroundTransition = keyframes`
  0% { background-color: white; }
  100% { background-color: black; }
`;

export { textFadeIn, backgroundTransition };