import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 745px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const DivisionLeftStyled = styled.div`
    width: 50vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header{
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(max-width: 750px){
            flex-direction: column;
            text-align: center;
        }

        h4 {
            width: 100%;
            margin-top: 15px;
            margin-bottom: 10px;
        }
    
        .logo {
            height: 160px;
        }

    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .btn-login {
            text-align: center;
            color: #fff;
            background-color: #208dff;
            border-radius: 8px;
            border: none;
            width: 320px;
            height: 40px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
        }
    }
    
    footer {
        margin-top: 30px;
        font-size: 14px;
        width: 100%;
        text-align: justify;
        span:nth-child(3){
            color: #208dff;
            font-weight: bold;
            cursor: pointer;

        }
    }
`;

export const ContainerInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 25px;

    label {
        color: #000;
        font-size: 16px;
        text-align: justify;
        margin-bottom: 7px;
    }

    .input {
        width: 320px;
        height: 40px;
        box-sizing: border-box;
        background-color: #fcfcfc;
        border-radius: 4px;
        outline: none;
        border: 1px solid #e7e6e6;
        padding-left: 10px;
    }
    span {
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
        margin-top: 5px;
        color: #208dff;
    }
`;

export const DivisionRightStyled = styled.div`
    box-sizing: border-box;
    width: 50vw;
    background-color: #208dff;
    padding: 2% 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image {
        width: 350px;

        @media (max-width: 990px) {
            width: 300px;
        }
    }
    .notice {
        color: #fff;
        text-align: center;

        h4{
            margin-top: 0px;
            font-size: 20px;
        }
    }

    footer {
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 20px;
        
        span:nth-child(1)::before {
            background-color: #c6c6c6;
        }

        span::before{
            content: "";
            cursor: pointer;
            display: block;
            width: 15px;
            height: 15px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    @media(max-width: 745px) {
        display: none;
    }
`;

export const ErrorStyled = styled.div`
    /* color: #fff;
    position: absolute; */
    /* top: 20vh; */
    /* left: 200px; */
    /* left: 30%;
    z-index: 2;
    width: max-content;
    text-align: center;
    line-height: 42px;
    height: 42px;
    padding: 5px 15px; */

    
    color: #f00;
    visibility: visible;
    width: max-content;
    text-align: center;
    line-height: 42px;
    height: 42px;
    padding: 5px 15px;
`;