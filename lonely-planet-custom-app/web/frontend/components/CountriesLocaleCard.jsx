import { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "../hooks";
import { Card, Page, Layout, TextField, FormLayout } from "@shopify/polaris";

export function CountriesLocaleCard() {
    const [countries, setCountries] = useState([]);
    const fetch = useAuthenticatedFetch();

    useEffect(async () => {
        try {
            const countries = await fetch("/api/countries").then((res) => res.json());
            console.log(countries);
            setCountries(countries.data);
        } catch (error) {
            console.error("There was an error with the endpoint", error)
        }
    }, []);

    const handleSave = () => {
        console.log("Saved!");
    }

    return (
        <>
            <Page fullWidth>
                <Layout>
                    <Layout.Section>
                        <Card title="Customize shipping info" sectioned primaryFooterAction={{ content: "Save", onAction: handleSave }}>
                            <FormLayout>
                                {!countries.length ? "Loading Content!" : countries.map((country, index) => <TextField key={index} label={`Shipping Info for ${country.name}`} onChange={() => { console.log("Value Changed") }} />)}
                            </FormLayout>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
        </>
    )
}