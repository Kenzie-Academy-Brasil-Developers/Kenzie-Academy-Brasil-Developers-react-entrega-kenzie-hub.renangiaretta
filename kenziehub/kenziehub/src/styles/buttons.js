import styled from "styled-components";


export const StyledButtonPrimary = styled.button`
    width: 13,367rem;
    height: 4.8rem;
    border-radius: 0.4rem;
    padding: 0rem 2.2rem 0rem 2.2rem;
    border-radius: 0.122rem;
    background-color: #FF577F;
    font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.639rem;
    &&:hover {
        background-color: #FF427F;
    }
`
export const StyledButtonNegative = styled.button`
    width: 13,367rem;
    height: 4.8rem;
    border-radius: 0.4rem;
    padding: 0rem 2.2rem 0rem 2.2rem;
    border-radius: 0.122rem;
    background-color: #59323F;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.639rem;
    color: var(--color-grey-0);
`
export const StyledButtonDisabled = styled.button`
    width: 100%;
    height: 4.8rem;
    border-radius: 0.4rem;
    padding: 0rem 2.2rem 0rem 2.2rem;
    border-radius: 0.122rem;
    background-color: #868E96;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.639rem;
    color: var(--color-grey-0);
    &&:hover {
        background-color: #343B41;
    }
`
export const StyledButtonExit = styled.button`
    width: 5.549rem;
    height: 3.2rem;
    border-radius: 0.4rem;
    padding: 0rem 1.6rem 0rem 1.6rem;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2.842rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0) ;
    &&:hover {
        filter: brightness(120%);
    }
`