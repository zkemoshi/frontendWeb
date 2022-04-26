import { useState } from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  justify-content: center;
  align-item: center;
  height: 100vh;
  color: green;
  border-color: red;
`;

function Loading() {
  return (
    <div>
      <BeatLoader speedMultiplier={0.5} css={override} />
    </div>
  );
}

Loading.defaultProps = {
  color: 'green',
  loading: false,
  speedMultiplier: 1,
  // css: override,
  size: 10,
};

export default Loading;

/*
https://www.npmjs.com/package/react-spinners
https://www.davidhu.io/react-spinners/

Loading.defaultProps = {
  color: 'green',
  loading: false,
  speedMultiplier: 1,
  // css: override,
  size: 10,
};
BarLoader		
BeatLoader
BounceLoader					
CircleLoader				
ClimbingBoxLoader					
ClipLoader					
ClockLoader				
DotLoader	
FadeLoader		
GridLoader					
HashLoader	
MoonLoader	
PacmanLoader	
PropagateLoader				
PuffLoader					
PulseLoader	
RingLoader	
RiseLoader	
RotateLoader	
ScaleLoader		
SyncLoader
*/
