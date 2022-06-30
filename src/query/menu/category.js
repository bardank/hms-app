import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query CategoryQuery($title: String) {
    categories(
      filters: { title: { contains: $title } }
      publicationState: PREVIEW
    ) {
      data {
        id
        attributes {
          categoryId
          title
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
