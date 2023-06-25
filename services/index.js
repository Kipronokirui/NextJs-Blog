import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              s
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
    
      const result = await request(graphqlAPI, query);

      return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          s
        }
      }
    `;
    const result = await request(graphqlAPI, query);
  
    return result.posts;
};
  
export const getSimilarPosts = async (categories, s) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {s_not: $s, AND: {categories_some: {s_in: $categories}}}
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          s
        }
      }
    `;
    const result = await request(graphqlAPI, query, { s, categories });
  
    return result.posts;
};
  
export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (s) => {
  const query = gql`
    query GetPostDetails($s : String!) {
      post(where: {s: $s}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        s
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { s });

  return result.post;
};