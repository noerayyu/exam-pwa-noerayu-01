import { withTranslation } from 'next-i18next';
import { withApollo } from '@lib_apollo';
import dynamic from 'next/dynamic';
import Core from '@core_modules/customer/pages/wishlist/core';

const Content = dynamic(() => import('@core_modules/customer/pages/wishlist/components'), { ssr: false });

const Page = (props) => <Core {...props} Content={Content} />;

export default withApollo({ ssr: false })(withTranslation()(Page));
