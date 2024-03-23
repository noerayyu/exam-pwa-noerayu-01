/* eslint-disable no-unused-vars */
import React from 'react';
import cx from 'classnames';
import { features } from '@config';

const GlobalPromoMessage = (props) => {
    const {
        // prettier-ignore
        storeConfig,
        ...other
    } = props;
    const { key_cookies } = features.globalPromo;

    const { welcome } = storeConfig;

    if (welcome) {
        return (
            <>
                <div
                    id="global-promo-message"
                    className={cx(
                        'global-promo-message',
                        'h-[38px]',
                        'text-center',
                        'font-normal',
                        'tablet:text-base',
                        'mobile:max-tablet:text-sm',
                        'bg-primary',
                        'text-neutral-white',
                        'mobile:max-tablet:py-1',
                    )}
                >
                    <p className="p-[8px]">{welcome}</p>
                </div>
            </>
        );
    }
    return null;
};

export default GlobalPromoMessage;
