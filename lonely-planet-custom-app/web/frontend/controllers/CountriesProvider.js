import { GraphqlQueryError } from "@shopify/shopify-api";
import shopify from "../../shopify.js";

export default async function CountriesProvider(session) {
    try {
        const response = await shopify.api.rest.Country.all({ session: session });
        return response;
    } catch (error) {
        if (error instanceof GraphqlQueryError) {
            throw new Error(
                `${error.message}\n${JSON.stringify(error.response, null, 2)}`
            );
        } else {
            throw error;
        }
    }
}