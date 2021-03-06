import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query MenuQuery($search: String) {
    foods(
      filters: { title: { contains: $search } }
      pagination: { limit: 100 }
      publicationState: PREVIEW
    ) {
      data {
        id
        attributes {
          title
          isVeg
          price
          descriptions
          img {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;
