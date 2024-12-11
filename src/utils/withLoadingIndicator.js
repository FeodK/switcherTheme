import React from "react";

export const withLoadingIndicator = (WrappedComponent) => {
  return function WithLoadingIndicator ({isLoading, ...props}) {
    if (isLoading) {
      return (
        <div>
          <h2>Идет загрузка</h2>
        </div>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };
};
export default withLoadingIndicator;
