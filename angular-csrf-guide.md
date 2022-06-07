https://www.stackhawk.com/blog/angular-csrf-protection-guide-examples-and-how-to-enable-it/

Cross-site request forgery (also known as CSRF, XSRF, one-click attack, and session riding) is an attack that doesn't break into the software system but can cause unwanted actions for application users. The consequences can be devastating in applications where state change causes irreversible results, such as in financial applications. So, how do you protect against such attacks? If your application uses Angular, CSRF protection comes built-in. 

Avoid absolute urls
Angular HttpClient handles protection against Cross-Site Request Forgery attacks by default, as we can read in the documentation:

HttpClient supports a common mechanism used to prevent XSRF attacks. When performing HTTP requests, an interceptor reads a token from a cookie, by default XSRF-TOKEN, and sets it as an HTTP header, X-XSRF-TOKEN.

https://angular.io/guide/http#security-xsrf-protection
Nonetheless, we have to remember to avoid absolute paths when sending any mutable requests. The HttpXsrfInterceptor::intercept method is documented as this:

Skip both non-mutating requests and absolute URLs.
Non-mutating requests don’t require a token, and absolute URLs require special handling anyway as the cookie set on our origin is not the same as the token expected by another origin.

https://github.com/angular/angular/blob/ff9f4de4f1147ba9ea6d17c31442a2eedcf4e0d2/packages/common/http/src/xsrf.ts#L77
With that in mind, we can decide to use relative paths in our requests. Below you can find an example based on the TaskDataService class:


https://keepgrowing.in/angular/fix-invalid-csrf-token-error-add-the-xsrf-token-header-in-angular/
