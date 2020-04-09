---
title: Conditional Rendering With Gatsby JS And Styled Components
subtitle: Using post tags to change the appearance of custom styled components.
author: Evan Kapantais
date: '2020-04-09'
featuredImage: './images/conditional-rendering/dev-header@2x.png'
tags: ['programming', 'react', 'gatsby', 'styled-components']
---

## The Setting

This post concerns how I handle conditional styling on my personal [blog](https://blog.evankapantais.com/). On it I write on various topics; politics, religion, programming and so on. My goal when making it was to have a single space for all my posts instead of making one page for my web development articles and another for the rest of the topics I am interested in.

## The Problem

Some days ago I was working on my first tutorial post in which I am including several `blockquote` elements as side-notes related to the surrounding content of the article. These I wanted to style by adding a bit of `padding` to the left and a solid `border`. I also wanted to include a light bulb icon to make it stand out a little bit more.

The problem that presented itself here was that I am also using `blockquote` elements in posts irrelevant to programming. While the rest of the styling I want to keep the same across all posts, I don't want to render that light bulb icon in every one. Blockquotes in tutorial posts are used for interesting side-notes, while for the rest of them they are reserved for, well, quotes.

One way to remedy this issue would be to switch from `.md`  to `.mdx` files and add that specific icon where needed through `JSX`. Since I am using [Styled Components](https://styled-components.com/), though, and I am also adding tags to every post, there is a more creative way to configure `blockquote` elements.

## The Solution

In the frontmatter of every post, I am declaring a `tags` array. In most posts I have a single tag, but in some I have more. Here's how the frontmatter of one of my posts looks like.

```
// 2019-book-picks.md

---
title: 2019 Book Picks
subtitle: My favourite books for 2019 and why you should read them.
author: Evan Kapantais
date: '2020-01-08'
featuredImage: ./images/sharon-mccutcheon-eMP4sYPJ9x0-unsplash.jpg
tags: ['books']
---
```

The content of every post is fetched by a [GraphQL](https://graphql.org/) query and is accessed by my `blog-post.js` template. When building the project, this is used to generate a new post page whenever a new node is added in my [Gatsby](https://graphql.org/) site. Below I have removed everything from my template class and left in only the relevant code to showcase the situation.

```js
// blog-post.js

class blogPost extends React.Component {

  render() {
    const featuredImage = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    const { title, subtitle, author, date, tags } = this.props.data.markdownRemark.frontmatter;

    return (
      <Layout>
        [...]
        <PostContainer>
          <article
          dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark.html}}
          />
          [...]
        </PostContainer>
      </Layout>
    );
  }
}
```

Below my `blogPost` class I have a GraphQL query that is fetching the contents of my markdown post that can then access through the `data` prop of our `class`. In the code above I am [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) this data so I can use it in my component.

Below is my styled component called `PostContainer` that wraps our article. 

```js
// adding our light bulb image at the top

import ideaImg from '../images/idea.png'
```

```scss
// blog-post.js

const PostContainer = styled.div `

  [...]

  article {
    line-height: 2rem;
    font-family: inherit;

    blockquote {
      position: relative;
      border-left: 5px solid #272936;
      padding: 1rem;
      padding-left: 3rem;
      border-radius: 2px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      &::before {
        content: '';
        display: block;
        position: absolute;
        background: url(${ideaImg}) no-repeat center / cover;
        width: 24px;
        height: 24px;
        top: 1.3rem;
        left: 1rem;
      }
    }
  }
`
```

Note here that the styling above is the one specific to programming articles. Therefore, I am adding `3px` of `padding-left` on the `blockquote` in order to make some room for our image that is added through its `::before` pseudo-element.

---

This template is used for every post across the website. We ideally want to remove the `::before` element when a post doesn't have to do with programming. This is where Styled Components come in. In Styled Components, when we add non-DOM-specific attributes to a rendered component, we can access these in the component definition to conditionally change its appearance. That's what we'll be doing here. Since, in our template, we have access to our post's tags, we can pass these as props to our `PostContainer` component and conditionally style our `blockquote` element.

```js
// blog-post.js

class blogPost extends React.Component {

  render() {
    const featuredImage = this.props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
    const { title, subtitle, author, date, tags } = this.props.data.markdownRemark.frontmatter;

    return (
      <Layout>
        <PostContainer isProgramming={tags.find(tag => tag === 'programming')}>
          <article
          dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark.html}}
          />
        </PostContainer>
      </Layout>
    );
  }
}
```

We are using here the [Array.Prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method on our `tags` array to look for a tag called `programming`. If the method finds a match in our array it returns it, otherwise it returns `undefined`. The result of this is passed up to the component definition. Below you can see how we can access it and modify the component's css properties accordingly. 

```scss
const PostContainer = styled.div `

  [...]

  article {

    [...]

    blockquote {

      [...]

      padding-left: ${props => props.isProgramming ? '3rem' : '1rem'};

      [...]

      &::before {
        content: '';
        display: ${props => props.isProgramming ? 'block' : 'none'};

        [...]
      }
    }
  }
`
```

You could assume from our `isProgramming` prop that we are checking whether its value is `true` of `false`. While this is the general idea, the prop does not strictly evaluate to either. Rather, if the value returned is the matched array item, that value in Javascript is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), whereas `undefined` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). This helps us resolve the condition in our css properties. 

This is how we can conditionally change the styling of our custom styled components using the data we get back from our GraphQL query.

## A Different Approach

Another way to solve this, if only a bit messier, would be to always add the `programming` tag at the `0` index of our `tags` array and pass `tags[0]` to our styled component. Our code would then have to be modified like so:

```js
class blogPost extends React.Component {
  const { title, subtitle, author, date, tags } = this.props.data.markdownRemark.frontmatter;

<PostContainer firstTag={tags[0]}>

  [...]

</PostContainer>
}
```

```scss
const PostContainer = styled.div`

  [...]
  
  blockquote {
    padding-left: ${props => props.firstTag === 'programming' ? '3rem' : '1rem'};
    
    ::before {
      display: ${props => props.firstTag === 'programming' ? 'block' : 'none' };
    }
  }
`
```