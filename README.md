# SecureAuth REST API Javascript SDK
SecureAuth REST API's are now accessible via pure JavaScript with no external libraries necessary. View the SecureAuth REST Authentication API details [here](https://docs.secureauth.com/x/WQABAg).

## Licenses
SecureAuth REST API Javascript SDK is licensed under the BSD 3-Clause [license](LICENSE).
REST API JavaScript SDK also utilizes the following libraries as well as the native JavaScript XMLHttpRequest object. 
- [jsSHA](http://caligatio.github.com/jsSHA) BSD License Copyright Brian Turek 2008-2015
- [CryptoJS v.3.1.2](https://code.google.com/p/crypto-js) License is available [here](https://code.google.com/p/crypto-js/wiki/License). (c) 2009-2013 by Jeff Mott. All rights reserved.

# How it Works
## Requirements
- SecureAuth IdP Appliance(s) version 8.0+
- SecureAuth Realm setup with API Access

## Browser Supported
- Chrome 3+
- Firefox 3.5+
- Opera 12+
- Safari 4+
- Internet Explorer 8+

## QuickStart Guide

1. Include sa-api.min.js in the bottom of the ```<body>```
2. Create the saConfig Object
```var c = new saConfig([REALM NAME], [SECUREAUTH SERVER URL], [APP ID], [APP KEY]);```
    
    EXAMPLE: 
    ```var c = new saConfig("SecureAuth1","https://localhost","aa6013a324fe48c983d8c900c8f39743","96a90f6375402bdad77f5a43a602c5a8199dc8c006e1b1d9388c9dcf1c777712");```
    
3. Create the secureAuthApi Object
```var t = new secureAuthApi([saConfig Object], [API Action], [Properties Object], [Success Callback], [Error Callback]);```
    
    EXAMPLE: 
    ```var s = new secureAuthApi(c,'user',{'user':'bschick'},console.info,console.error);```

4. Execute the __send()__ method.

	 EXAMPLE: 
    ```var s = new secureAuthApi(c,'user',{'user':'bschick'},console.info,console.error);
	s.send();```

### API Actions
- __user__ Validate the UserID Only
    - Required *Properties Object* __user__
- __pwd__ Validate the UserID and Password Only
    - Required *Properties Object* __user__, __password__
- __get-2fa__ Receive the Two-Factor options available for the UserID
    - Required *Properties Object* __user__
- __sub-2fa__ Submit the Value of the selected Two-Factor option
    - Required *Properties Object* __user__, __factor_id__, __type__, __token__
- __ipeval__ Submit UserID for IP Risk Evaluation
    - Required *Properties Object* __user__, __ip_address__