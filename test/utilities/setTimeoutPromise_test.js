import delay from '../src/setTimeoutPromise'


describe("setTimeoutPromise Test", () => {
    let callback;
    let originalTimeout;

    beforeEach(function() {
        callback = jasmine.createSpy("callback");
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("延迟100毫秒后，promise是否执行", (done) => {
        let value = 100
        let start_time = new Date().valueOf()
        let end_time;
        delay(500).then(() => {
            callback();
            value++
            end_time = new Date().valueOf()
            expect(value).toBe(101);
            expect(end_time - start_time).toBeGreaterThan(500);
            expect(callback).toHaveBeenCalled();
            done();
        });

        expect(callback).not.toHaveBeenCalled();
        expect(value).toBe(100);
        //
        // jasmine.clock().tick(1000);
        //
        // expect(value).toBe(101);

    });

});
