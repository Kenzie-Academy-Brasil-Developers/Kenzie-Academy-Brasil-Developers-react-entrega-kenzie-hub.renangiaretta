import styled from "styled-components";


export const StyledRegisterForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-3);
    border-radius: 0.4rem;
    padding: 2rem 2.2rem;
    margin: 0 0 2rem 0;

    .titleContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }    

    .registerForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;

    .title4 {
        background-color: var(--color-grey-2);
        width: 33rem;
        height: 4.8rem;
        border-radius: 0.4rem;
        padding: 0rem 1.6rem 0rem 1.6rem;
        border: none;
        ::placeholder {
            font-weight: 400;
            font-size: 1.624rem;
            line-height: 2.639rem;
            color: var(--color-grey-1);
        }
    }

    select {
        background-color: var(--color-grey-2);
        width: 33rem;
        height: 4.8rem;
        border-radius: 0.4rem;
        padding: 0rem 1.6rem 0rem 1.6rem;
        font-weight: 400;
        font-size: 1.624rem;
        line-height: 2.639rem;
        color: var(--color-grey-1);
        border: none;
    }
}
`