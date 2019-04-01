import ESPromise from 'es6-promise';

const delay = (time) => {
    let setTimeOutRef;
    let theReject;
    const p = new ESPromise((resolve, reject) => {
        setTimeOutRef = setTimeout(resolve, time);
        theReject = reject;
    });
    if (!p.cancel) {
        p.cancel = () => {
            clearTimeout(setTimeOutRef);
            theReject(Error('Cancelled'));
        };
    }
    return p;
};

export default delay;
