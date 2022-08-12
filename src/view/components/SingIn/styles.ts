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
        margin-top: 1%;
        font-size: 20px;
        text-align: center;
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

    }
}
`;
