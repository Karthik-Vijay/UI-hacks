# Cleanup observables using TakeUntil operator in RxJS/ Angular

Working with Observables from RxJS in Angular is really great, and it is also the default return type of built-in Angular services, like the HttpClient for instance, but how do you remove them from memory once they are done?

One thing to note when using Observables/Promises that are non-completing, unlike the HttpClient which always terminates on complete, is that they will leave a small footprint in memory if not dealt with accordingly. Sometimes you may want to have an Observable that lives for the entirety of the application cycle, like a state service, and that is a-ok! But if you create Observables that do not complete and are more specific to a component, you may want to consider destroying them during the OnDestroy life-cycle hook to save on memory and watchers. If you do this for HttpClient Observables, you have the added benefit of canceling the http request in the client browser entirely as well.

I found one pattern that I am applying to all my applications to destroy (or unsubscribe) Observables which is to use the takeUntil operator. This operator will — according to the docs — subscribe and begin mirroring the source Observable and will continue doing so until a second Observable emits a value or a ‘complete’ notification, which then leads to its own termination.

All of this means, if we create some kind of Observable, e.g. a Subject, and make that Subject emit a value when the component is destroyed, then we can terminate all of our Observables in one go without leaving any footprint in memory behind us.

## Worth reading 

https://medium.com/impact-developers/how-to-destroy-observables-in-angular-313dec343b45

##RxJs Mapping Detailed Explanation

https://blog.angular-university.io/rxjs-higher-order-mapping/
