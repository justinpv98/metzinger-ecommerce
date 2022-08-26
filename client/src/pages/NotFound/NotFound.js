import React from 'react'
import * as styled from "./NotFound.styles";

import { useDocumentTitle } from "../../hooks";

function NotFound() {
    useDocumentTitle("404 Not Found")
    return (
        <styled.Main id="main">
            <styled.Container>
            <styled.Title>404</styled.Title>
            <styled.Subtitle>Page not found</styled.Subtitle>
            <styled.Copy>Sorry, the page you are trying to access could not be found. Click below to continue your shopping experience.</styled.Copy>
            <styled.LinkButton to="/">Continue Shopping</styled.LinkButton>
            </styled.Container>
        </styled.Main>
    )
}

export default NotFound
