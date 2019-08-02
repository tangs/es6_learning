{
    class MyPromise {
        constructor (callback) {
            // 0.pending   1.resolved   2.rejected
            this.status = 0;
            callback(this.resolved.bind(this), this.rejected.bind(this));
        }

        resolved () {
            if (typeof this.resolvedCallback === 'function') {
                const ret = this.resolvedCallback();
            }
        }

        rejected () {
            if (typeof this.rejectedCallback === 'function') {
                this.rejectedCallback();
            }
        }

        then (resolvedCallback, rejectedCallback = null) {
            if (typeof resolvedCallback === 'function') {
                this.resolvedCallback = resolvedCallback;
            }
            if (typeof rejectedCallback === 'function') {
                this.rejectedCallback = resolvedCallback;
            }
            this.next = new Promise(() => {

            });
            return this.next;
        }

        catch (rejectedCallback) {
            if (typeof rejectedCallback === 'function') {
                this.rejectedCallback = resolvedCallback;
            }
        }
    }

    const Promise = MyPromise;
    console.log(1);
    const promise = new Promise((resolve, reject) => {
        console.log(2);
        setTimeout(() => resolve(), 1000);
        // resolve();
    });  
    console.log(3);
    promise.then(() => {
        console.log(5);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        });
    })
    // .then(() => {
    //     console.log(6);
    // });
    console.log(4);
}
