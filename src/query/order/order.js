import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($table: Int, $billed: Boolean, $details: JSON) {
    createOrder(data: { tableNo: $table, details: $details, billed: $billed }) {
      data {
        id
        attributes {
          tableNo
        }
      }
    }
  }
`;

export const MY_ORDERS = gql`
  query MyOrders($billed: Boolean, $table: Int) {
    orders(
      filters: { billed: { eq: $billed }, tableNo: { eq: $table } }
      publicationState: PREVIEW
    ) {
      data {
        id
        attributes {
          billed
          tableNo
          details
          updatedAt
        }
      }
    }
  }
`;
