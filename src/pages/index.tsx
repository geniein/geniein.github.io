import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Main/Footer'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'

const CATEGORY_LIST = {
    All: 3,
    Web: 2,
    Mobile: 1,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `

const IndexPage: FunctionComponent = function () {
    return (
        <Container>
            <GlobalStyle />
            <Introduction />
            <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
            <PostList />
            <Footer />
        </Container>
    )
}

export default IndexPage