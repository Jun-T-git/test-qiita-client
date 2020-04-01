import * as React from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

interface Props {
    locale: "en" | "ja";
}

class CustomDocument extends Document<Props> {
    render() {
        return (
            <Html lang={this.props.locale}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                          integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous"/>
                </Head>

                <body>
                <Main />

                <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;

