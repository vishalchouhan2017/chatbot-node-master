
exports.customerRegistration = function () {
    this.userEntity = {
        "userId" : "",
        "firstName" : "",
        "middleName" : "",
        "lastName" : "",
        "primaryEmail" : "",
        "primaryMobileNumber" : "",
        "userType" : "",
        "userStatus" : "",
        "userStatusReason" : "",
        "userStatusUpdatedById" : "",
        "userStatusUpdatedByName" : "",
        "userStatusUpdatedDate" : "",
        "passwordHash" : "",
        "lastLoginDate" : "",
        "spocId" : "",
         "additionalDetails" : {
            "PANNumber" : "",
            "billingAddress" : {
                "addressId" : "", 
                "addressFirstName" : "", 
                "addressLastName" : "", 
                "addressEmail" : "", 
                "addressMobile" : "", 
                "addressLine1" : "", 
                "addressLine2" : "", 
                "addressLine3" : "", 
                "addressLine4" : "", 
                "addressLine5" : "", 
                "city" : "", 
                "state" : "", 
                "country" : "", 
                "pincode" : "", 
                
            },
          },
          "WebsiteLink" : "",
          "userip":""
    }
    
}

exports.viewCustomer = function () {
    this.mobile = "";
    this.password = "";
  };

       
  exports.querySchema = function () {
    this.userId = "";
    this.query = "";
    this.response = "";
    this.stateCode = "";
    this.feedBack = "";
    this.userFeedbackComment = "";
    this.requestIp = "";
    this.requestType = "" // web or mobile
  };
  