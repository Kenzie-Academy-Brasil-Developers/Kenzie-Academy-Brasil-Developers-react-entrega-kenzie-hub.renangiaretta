import styled from "styled-components";

export const StyledHomeTechs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    min-height: 11.8rem;
    gap: 2rem;

    .addTechnologies {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .techsContainer {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .ulCards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        min-height: 10rem;
        background-color: var(--color-grey-3);
        gap: 2rem;
        padding: 2rem;
    }

    .techCard {
        padding: 1rem;
        height: 4.9rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-grey-4);
        cursor: pointer;
        :hover{
            background-color: var(--color-grey-2);
        }
    }

    .techTextContainer {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    @media screen and (max-width: 420px) {
        .techCard {
            flex-direction: column;
            height: auto;
        }
    }
`