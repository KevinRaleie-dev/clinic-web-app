import Head from 'next/head';
import { ISeo } from '../interfaces/seo';

export const SEO = ({title}: ISeo) => {

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}