import { gql } from '@apollo/client';

export const GET_TRACKING_ITEMS = gql`
  query MyQuery {
    getTrackingItems {
      name
      value {
        customer {
          email
          name
        }
        items {
          item_id
          name
          price
          quantity
        }
        customer_id
      }
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query MyQuery {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query MyQuery {
    getOrders {
      name
      value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
