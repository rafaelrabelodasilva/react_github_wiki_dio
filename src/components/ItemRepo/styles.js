import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 18px;
        color: #FAFAFA;
    }

    p {
        font-size: 15px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    .repoContainer {

    }

    .repoActionContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .repoActionContainer button {
        background-color: #FAFAFAFA;
        border-radius: 5px;
        text-decoration: none;
        height: 35px;
        width: 120px;
        cursor: pointer;
        margin: 0 5px;
    }

    .repoActionContainer button:hover {
        background-color: #FAFAFA90;
    }
`