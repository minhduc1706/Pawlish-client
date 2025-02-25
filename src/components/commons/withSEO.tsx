import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
}

const withSEO = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { title, description }: SEOProps
) => {
  const SEOComponent = (props: P) => {
    return (
      <>
        <Helmet>
          <title>{title ? `${title} | Pawlish` : "Pawlish"}</title>
          {description && <meta name="description" content={description} />}
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };

  return SEOComponent;
};

export default withSEO;
