import React from 'react';
import GoogleAnalytics from 'react-ga';

// TODO: Add the real tracking code (this is a test one setup by Callum)
GoogleAnalytics.initialize('UA-84715283-2');

const withTracker = (WrappedComponent) => {
    const trackPage = (page) => {
        GoogleAnalytics.set({ page });
        GoogleAnalytics.pageview(page);
    };

    const HOC = (props) => {
        const page = props.location.pathname;
        trackPage(page);

        return (
            <WrappedComponent {...props} />
        );
    };

    return HOC;
};

export default withTracker;