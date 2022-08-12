// Core
import styled from 'styled-components';

export const Container = styled.section`
color: white;
margin-top: 20%;
display: flex;
flex-direction: column;
align-items: center;
main {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border: 1px solid black;
    border-radius: 15px;
    background: #282828;
    min-height: 300px;
    .input-section {
        margin: 20px auto;
    }
    h1 {
        color: #FF4A4A;
        margin-top: 1%;
        font-size: 22px;
    }
    input {
        margin-top: 2px;
        width: 300px;
        height: 37px;
        font-size: 20px;
        display: block;
    }
    button {
        display: block;
        width: 308px;
        margin-top: 5px;
        height: 20px;
        &:hover {
            background-color: #FF4A4A;
            color: white;
            transition: 0.1.7s;
        }
    }
}
`;
