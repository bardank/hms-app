import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query MenuQuery {
    foods(pagination: { limit: 10 }, publicationState: PREVIEW) {
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
