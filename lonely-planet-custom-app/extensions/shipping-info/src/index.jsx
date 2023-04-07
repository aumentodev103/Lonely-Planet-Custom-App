import React from 'react';
import {
  useShippingAddress,
  useExtensionApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::ShippingMethods::RenderBefore', () => <App />);

const countryLocale = {
  "IN": "The books will be shipped in 5-6 business days"
}

function App() {
  // const { extensionPoint } = useExtensionApi();
  const { countryCode } = useShippingAddress();
  // const translate = useTranslate();
  return (
    <Banner status='warning' title="Shipping Info">
      {/* {translate('welcome', { extensionPoint })} */}
      {countryLocale[countryCode]}
    </Banner>
  );
}