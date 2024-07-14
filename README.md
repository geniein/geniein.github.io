
# Markdown Library

```bash
yarn add gatsby-transformer-remark gatsby-remark-images gatsby-remark-prismjs prismjs gatsby-remark-smartypants gatsby-remark-copy-linked-files gatsby-remark-external-links
```

- gatsby-transformer-remark Markdown Parser 역할을 하는 라이브러리입니다. 마크다운 문법을 HTML 형태로 변환해주어 띄워줄 수 있도록 해주는 핵심 라이브러리입니다.
- gatsby-remark-images 마크다운 문서 내에서의 이미지 사용을 최적화해주는 라이브러리입니다. 다양한 반응형 이미지 생성, 동적 로딩 등 다양한 기능을 제공해줍니다.
- gatsby-remark-prismjs & prismjs prismjs는 문법 하이라이팅 역할을 담당하는 라이브러리입니다. 소스코드를 실제 IDE에서 보는 것처럼 변환해주는 기능을 제공합니다.
- gatsby-remark-smartypants 해당 라이브러리는 글 내에서 사용되는 여러 문장 부호들을 더 깔끔한 부호로 바꿔주는 기능을 제공하고 있습니다. 이를 통해 글의 가독성을 보다 더 높일 수 있습니다.
- gatsby-remark-copy-linked-files 마크다운 내에서 사용되는 이미지를 특정 디렉토리로 복사해주는 라이브러리입니다. 일반적으로 루트 디렉토리의 public 디렉토리에 이미지들이 복사됩니다.
- gatsby-remark-external-links 이 라이브러리는 마크다운 내에서 사용되는 링크 태그의 target, rel 등의 속성을 지정해주는 기능을 제공해줍니다.

**~./gatsby-config.js**

```javascript
...
plugins:[
  ...
  {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    }
    ...
```

**~./gatsby-browser.js**