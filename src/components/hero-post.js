import React from 'react'
import Link from 'gatsby'

const HeroCard = ({ node }) => {

  return (
    <Link to={`/blog/${node.fields.slug}`}>
      <div>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
      <div>
        {node.frontmatter.tags.map(tag => (
          <h4># {tag}</h4>
        ))}
        <h1>{node.frontmatter.title}</h1>
        <h3>{node.frontmatter.subtitle}</h3>
        <div>
          <h5>{node.frontmatter.date}</h5>
          <h5>{node.timeToRead} Minute Read</h5>
        </div>
      </div>
    </Link>
  );
}

export default HeroCard;