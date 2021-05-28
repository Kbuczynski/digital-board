import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../utils/theme';
import { GlobalStyle, StyledWrapper } from './style';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledWrapper>{children}</StyledWrapper>
        </ThemeProvider>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;