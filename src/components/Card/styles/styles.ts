import styled from 'styled-components';


export const Card = styled.div `
    width: 70%;
    height: 47%;

    background-color: #E8E8E8;
    border-radius: 25px;
    margin-right: 15px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
`;

export const CardWithPhoto = styled.div `
    width: 35%;
    height: 47%;

    border-radius: 25px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;

    img {
        width: 65%;
        height: 91%;

        border-radius: 110px;
    }

    @media (max-width: 900px){
        img {
            width: 73%;
            height: 98%;

            margin-top: 5px;
        }

        height: 55%;
        margin-top: 60px;
    }
`;

export const PhotoDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50%;
`;

export const Div = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    height: 90vh;
    width: 900px;
    text-align: left;
    margin: 0 auto;

    @media (max-width: 900px){
        flex-direction: column-reverse;
    }

`;

export const Text = styled.p `
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const Title = styled.h3 `
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #00A1FE;
`;

export const NameBox = styled.h3 `
    font-size: 22px;
    font-family: 'Poppins', sans-serif;


    color: black;
    background-color: #F4F4F4;
    width: 70%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 22px;
        font-weight: 900;
    }

    &:hover {
        p {
            color: #00A1FE;
        }
    }
`;
