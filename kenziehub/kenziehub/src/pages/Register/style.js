import styled from "styled-components";

export const StyledRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    .registerHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 27.5%;
        height: 8rem;
    }

    .toLoginButton {
        display: flex;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 0.4rem;
        background-color: var(--color-grey-2);
        color: #FFFFFF;
        font-weight: 800;
        :hover {
            filter: brightness(1.3);
        }
    }
`