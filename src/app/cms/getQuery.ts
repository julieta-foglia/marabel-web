import { OperationVariables } from "@apollo/client";
import { DocumentNode } from "graphql";
import { ApolloClientApp } from "./apolloConfig";

export interface QueryRequestProps {
  query: DocumentNode;
  variables?: OperationVariables;
  queryNewEnv?: boolean;
}

export interface QueryResponseProps<T> {
  data: T;
}

export const getQuery = async <T>({
  query,
  variables,
}: QueryRequestProps): Promise<QueryResponseProps<T>> => {
  const Client = ApolloClientApp;

  const { data } = await Client.query<T>({
    query,
    fetchPolicy: "no-cache",
    variables,
  });

  return {
    data,
  };
};
