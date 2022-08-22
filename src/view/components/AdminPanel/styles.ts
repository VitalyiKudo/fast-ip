// Core
import styled from 'styled-components';

export const Container = styled.section`
color: white;
font-size: 20px;
display: flex;
margin-top: 20%;
justify-content: center;
.logout {
    margin: 0px auto;
    display: block;
    background-color: transparent;
    border: 1px solid #FF4A4A;
    color: white;
    padding: 5px 10px;
}
main {
    button {
        font-size: 30px;
        color: #FF4A4A;
        background: none;
        border: none;
    }
    background: #282828;
    border: 1px solid black;
    border-radius: 15px;
    width: 50%;
    min-height: 400px;
    .date {
        font-weight: 500;
        font-size: 25px;
        margin-top: 2%;
        display: flex;
        justify-content: center;
    }
    .views-info {
        font-size: 22px;
        margin: 8% auto;
        text-align: center;
        span {
            color: #FF4A4A;
        }
    }
    .country-heading {
        font-size: 22px;
        text-align: center;
        margin-bottom: 15px;
    }
    .country-info {
        display: flex;
        justify-content: center;
        h2 {
            display: flex;
            justify-content: center;
            p {
                align-self: center;
                color: #adadb8;
            }
        }
        span {
            color: #adadb8;
            padding-bottom: -100px;
        }
        img {
            margin: 8px;
            width: 60px;
            height: 50px;
        }
        div {
            margin: 1%;
        }
    }
    .button-section {
        display: flex;
        justify-content: center;
    }
}
`;
