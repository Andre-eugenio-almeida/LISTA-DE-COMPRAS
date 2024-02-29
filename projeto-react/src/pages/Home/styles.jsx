import styled from 'styled-components'


export const Container = styled.div `
    background: #b752ff;
    padding: 25px;
    border-radius: 15px;

    h1 {
        color: #fff;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 25px;
    }


`

export const AddButton = styled.button`

background-color: #6cf000;
color: #000;
height: 35px; 
padding: 5px 10px;
cursor: pointer;
border: none;
border-radius: 5px;
margin-left: 10px;

&:hover {
    opacity: 0.8;
}

`
export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    


`

