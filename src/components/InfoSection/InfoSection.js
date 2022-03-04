import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper } from './InfoSection.elements';


const InfoSection = ({lightBg, imgStart}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>h1</InfoSec>
        <Container>
           <InfoRow imgStart= {imgStart}>
              <InfoColumn>
                <TextWrapper>h1</TextWrapper>
              </InfoColumn>
           </InfoRow>
        </Container>




    </>
  )
}

export default InfoSection;