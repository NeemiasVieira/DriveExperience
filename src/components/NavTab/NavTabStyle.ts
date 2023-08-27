import styled from "styled-components"

export const NavTabStyle = styled.header`

    *{
        margin: 0;
    }

    nav{
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        background-color: #C33;
        height: 50px;
        width: 100vw;
    }

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: row nowrap;
        list-style: none;
    }

    li{
        font-size: 1.1rem;
        a{
            text-decoration: none;
            color: #fff;
        }
    }

    .loginButton{
        position: fixed;
        right: 4%;
    }

    .navDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row nowrap;
        gap: 50px;
    }
`