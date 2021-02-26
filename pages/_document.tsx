import NextDocument, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document';
import { CssBaseline } from '@geist-ui/react';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const styles = CssBaseline.flush();
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
