import { gql } from 'graphql-request';

import { gqlClient } from '@/lib/graphql';

export const CreateAccountByEmail = gql`
  mutation MyMutation($email: String = "") {
    createAccount(data: { email: $email }) {
      id
    }
    publishAccount(where: { email: $email }) {
      id
    }
  }
`;

export const GetAccountByEmail = gql`
  query MyQuery($email: String = "") {
    account(where: { email: $email }) {
      id
    }
  }
`;

export const linkGqlAccount = async (email: string) => {
  try {
    const responseAccount = await gqlClient.request(GetAccountByEmail, {
      email: email,
    });

    if (responseAccount.account) {
      return false;
    }

    const responseAccountCreated = await gqlClient.request(
      CreateAccountByEmail,
      {
        email: email,
      },
    );
    if (responseAccountCreated) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
