import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder(
    $table: Int
    $cleared: Boolean
    $details: JSON
    $confirmOrder: Boolean
    $confirmedBy: String
  ) {
    createOrder(
      data: {
        tableNo: $table
        cleared: $cleared
        details: $details
        confirmOrder: $confirmOrder
        confirmedBy: $confirmedBy
      }
    ) {
      data {
        id
        attributes {
          tableNo
        }
      }
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation updateOrder($id: ID!, $details: JSON) {
    updateOrder(id: $id, data: { details: $details }) {
      data {
        id
        attributes {
          cleared
          tableNo
          details
        }
      }
    }
  }
`;

export const CLEARED_ORDER = gql`
  mutation updateOrder($id: ID!, $cleared: Boolean) {
    updateOrder(id: $id, data: { cleared: $cleared }) {
      data {
        id
        attributes {
          cleared
          tableNo
          details
        }
      }
    }
  }
`;

export const MY_ORDERS = gql`
  query MyOrders($cleared: Boolean, $table: Int) {
    orders(
      filters: { cleared: { eq: $cleared }, tableNo: { eq: $table } }
      publicationState: PREVIEW
    ) {
      data {
        id
        attributes {
          cleared
          tableNo
          details
          updatedAt
        }
      }
    }
  }
`;

export const LIVE_ORDERS = gql`
  query LiveOrders($cleared: Boolean) {
    orders(
      filters: { cleared: { eq: $cleared } }
      publicationState: PREVIEW
    ) {
      data {
        id
        attributes {
          cleared
          tableNo
          details
          updatedAt
        }
      }
    }
  }
`;
