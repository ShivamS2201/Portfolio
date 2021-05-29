import React from 'react';
import styled from 'styled-components';

function Home(){
    return(
        <Conatiner>
        HOME
        <img src="/images/pht.png" />
        </Conatiner>
    )
}

const Conatiner = styled.div`
img{
    height:120px;
    width:120px;
}
`

export default Home;