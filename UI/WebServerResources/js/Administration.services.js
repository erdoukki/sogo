!function(){"use strict";function a(){}a.$factory=["$q","$timeout","$log","sgSettings","Resource","User",function(b,c,d,e,f,g){return angular.extend(a,{$q:b,$timeout:c,$log:d,$$resource:new f(e.activeUser("folderURL"),e.activeUser()),activeUser:e.activeUser(),$User:g}),new a}];try{angular.module("SOGo.AdministrationUI")}catch(b){angular.module("SOGo.AdministrationUI",["SOGo.Common"])}angular.module("SOGo.AdministrationUI").factory("Administration",a.$factory)}();
//# sourceMappingURL=Administration.services.js.map