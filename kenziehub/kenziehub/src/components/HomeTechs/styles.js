import styled from "styled-components";

export const StyledHomeTechs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 11.8rem;
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
        height: auto;
        background-color: red;
    }

    .ulCards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        background-color: blue;
        gap: 2rem;
        padding: 2rem;
    }

    .techCard {
        display: flex;
        justify-content: space-between;
        background-color: green;
    }

`