import Principal "mo:base/Principal";
import Text "mo:base/Text";
module {
    public type Post = {
        creatorsId : Principal;
        firstName : Text;
        lastName : Text;
        creation_date_of_Post : Text;
        description : Text;
        images : [Nat8];
    };

    let joined_africa_category : [Text] = [
        {
            "categoryName" : "abc";
            "subcategory" : ["asdf", "sdfasd", "dsf"];
        },
    ];
};
