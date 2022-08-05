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
    h1 {
        margin-top: 1%;
    }
    input {
        margin-top: 10px;
        display: block;
    }
}
`;
